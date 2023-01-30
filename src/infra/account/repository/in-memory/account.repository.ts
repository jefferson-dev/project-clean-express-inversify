import { injectable } from 'inversify';
import { IAccountRepository } from 'src/features/account/IAccountRepository';
import { Repository } from '../../../abstrations/repository/in-memory/Repository';
import { Account, AccountData } from '../../../../domain/account/entity/account';

@injectable()
export class AccountRepositoryInMemory extends Repository<Account> implements IAccountRepository {
  constructor() {
    super();
  }

  public async findByEmail(email: string): Promise<AccountData | undefined> {
    return this.repository.find((i) => i.email === email);
  }

  public async update({ id, name, email, password }: AccountData): Promise<AccountData | undefined> {
    const account = this.repository.find((i) => i.id === id)!;

    account.name = name;
    account.email = email;
    account.password = password;

    return account;
  }
}
