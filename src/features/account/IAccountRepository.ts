import { Account, AccountData } from 'src/domain/account/entity/account';

export interface IAccountRepository {
  find: () => Promise<AccountData[]>;
  findById: (id: string) => Promise<AccountData | undefined>;
  findByEmail: (email: string) => Promise<AccountData | undefined>;
  create: (input: Account) => Promise<AccountData>;
  update: (input: Account) => Promise<AccountData | undefined>;
  delete: (id: string) => Promise<void>;
}
