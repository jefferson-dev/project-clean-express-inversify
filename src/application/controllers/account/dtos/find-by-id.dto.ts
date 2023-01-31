import { AccountData } from '../../../../domain/account/entity/account';

export type FindAccountByIdInput = {
  id: string;
};

export type FindAccountByIdOutput = AccountData | undefined;
