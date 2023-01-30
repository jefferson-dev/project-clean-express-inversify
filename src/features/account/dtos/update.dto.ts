import { AccountData } from '../../../domain/account/entity/account';

export type UpdateAccountInput = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UpdateAccountOutput = AccountData | undefined;
