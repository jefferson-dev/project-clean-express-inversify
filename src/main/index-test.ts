import 'reflect-metadata';
import { IoC } from './container';
import { INJECT } from './types/container';
import { AccountService } from '../features/account/account.service';

(async () => {
  const ioc = new IoC().build();
  const account = ioc.get<AccountService>(INJECT.AccountService);

  await account.create({
    name: 'Jefferson',
    email: 'jefferson.neres@mutual.club',
    password: '12345',
  });

  const findAccount = await account.find();

  console.log(findAccount);
})();
