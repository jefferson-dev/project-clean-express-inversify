import { randomUUID } from 'node:crypto';
import { inject, injectable } from 'inversify';
import { INJECT } from '../../main/types/container';
import { Account } from '../../domain/account/entity/account';
import { IAccountRepository } from './IAccountRepository';
import {
  CreateAccountInput,
  CreateAccountOutput,
  DeleteAccountInput,
  DeleteAccountOutput,
  FindAccountByEmailInput,
  FindAccountByEmailOutput,
  FindAccountByIdInput,
  FindAccountByIdOutput,
  FindAccountsOutput,
  UpdateAccountInput,
  UpdateAccountOutput,
} from './dtos';

@injectable()
export class AccountService {
  constructor(
    @inject(INJECT.AccountRepository)
    private readonly repository: IAccountRepository,
  ) {}

  public async find(): Promise<FindAccountsOutput> {
    return this.repository.find();
  }

  public async findById({ id }: FindAccountByIdInput): Promise<FindAccountByIdOutput> {
    return this.repository.findById(id);
  }

  public async perform({ email }: FindAccountByEmailInput): Promise<FindAccountByEmailOutput> {
    return this.repository.findByEmail(email);
  }

  public async create(input: CreateAccountInput): Promise<CreateAccountOutput> {
    const account = new Account(input);

    account.id = randomUUID();

    return this.repository.create(account);
  }

  public async update(input: UpdateAccountInput): Promise<UpdateAccountOutput> {
    const account = new Account(input);

    return this.repository.update(account);
  }

  public async delete({ id }: DeleteAccountInput): Promise<DeleteAccountOutput> {
    return this.repository.delete(id);
  }
}
