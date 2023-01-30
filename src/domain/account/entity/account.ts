import { Entity } from '../../abstrations/Entity';

export class AccountData {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class Account extends Entity<string, AccountData> {
  private _name: string;
  private _email: string;
  private _password: string;

  set name(input: string) {
    this._name = input;
  }

  get name(): string {
    return this._name;
  }

  set email(input: string) {
    this._email = input;
  }

  get email(): string {
    return this._email;
  }

  set password(input: string) {
    this._password = input;
  }

  get password(): string {
    return this._password;
  }

  constructor(input: AccountData) {
    super(),
      (this.id = input.id ?? undefined),
      (this.name = input.name),
      (this.email = input.email),
      (this.password = input.password),
      this.setEntity(input);
  }
}
