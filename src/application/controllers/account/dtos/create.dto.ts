import { AccountData } from '../../../../domain/account/entity/account';

export type CreateAccountInput = {
  name: string;
  email: string;
  password: string;
};

export type CreateAccountOutput = AccountData;
