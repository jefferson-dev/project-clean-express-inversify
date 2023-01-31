export abstract class Entity<Id = any> {
  protected _id?: Id;

  set id(input: Id | undefined) {
    this._id = input;
  }

  get id(): Id | undefined {
    return this._id;
  }
}
