import { AccountData } from '../../../domain/account/entity/account';

export type FindAccountByEmailInput = {
  email: string;
};

export type FindAccountByEmailOutput = AccountData | undefined;
