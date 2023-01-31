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
    const result = await this.repository.find();

    return result.length ? result.map((i) => i.toObject()) : result;
  }

  public async findById({ id }: FindAccountByIdInput): Promise<FindAccountByIdOutput> {
    const result = await this.repository.findById(id);

    if (!result) throw new Error('Account not found');

    return result.toObject();
  }

  public async create(input: CreateAccountInput): Promise<CreateAccountOutput> {
    const account = Account.create(input);

    const emailAlreadyExists = await this.repository.findByKey('email', account.email);

    if (emailAlreadyExists) throw new Error('Email already in use.');

    const result = await this.repository.create(account);

    return result.toObject();
  }

  public async update(input: UpdateAccountInput): Promise<UpdateAccountOutput> {
    const account = Account.update(input);

    const result = await this.repository.update(account);

    if (!result) throw new Error('No account has been updated');

    return result.toObject();
  }

  public async delete({ id }: DeleteAccountInput): Promise<DeleteAccountOutput> {
    return this.repository.delete(id);
  }
}
