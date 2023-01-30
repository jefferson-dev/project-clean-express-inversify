import { AccountData } from '../../domain/account/entity/account';

export type UpdateAccountInput = {
  name: string;
  email: string;
  password: string;
};

export type UpdateAccountOutput = AccountData;
