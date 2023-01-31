import { randomUUID } from 'node:crypto';
import { Entity } from '../../abstrations/Entity';

export type AccountData = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class Account extends Entity<string> {
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

  static create(input: AccountData) {
    const account = new Account();

    account.id = randomUUID();
    account.name = input.name;
    account.email = input.email;
    account.password = input.password;

    return account;
  }

  static update(input: AccountData) {
    const account = new Account();

    account.id = input.id;
    account.name = input.name;
    account.email = input.email;
    account.password = input.password;

    return account;
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}
