import { Container } from 'inversify';
import { INJECT } from '../types/container';
import { AccountRepositoryInMemory } from '../../infra/account/repository/in-memory/account.repository';
import { AccountService } from '../../features/account/account.service';
import { IAccountRepository } from '../../features/account/IAccountRepository';

export class IoC {
  private container: Container;

  constructor(
    container: Container = new Container({
      skipBaseClassChecks: true,
      autoBindInjectable: true,
    }),
  ) {
    this.container = container;
  }

  build(): Container {
    this.container.bind<IAccountRepository>(INJECT.AccountRepository).to(AccountRepositoryInMemory).inSingletonScope();
    this.container.bind(INJECT.AccountService).to(AccountService).inSingletonScope();

    return this.container;
  }
}
