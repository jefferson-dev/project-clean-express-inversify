import { Account } from 'src/domain/account/entity/account';

export interface IAccountRepository {
  find: () => Promise<Account[]>;
  findById: (id: string) => Promise<Account | undefined>;
  findByKey(key: keyof Omit<Account, 'toObject'>, value: string): Promise<Account | undefined>;
  create: (input: Account) => Promise<Account>;
  update: (input: Account) => Promise<Account | undefined>;
  delete: (id: string) => Promise<void>;
}
