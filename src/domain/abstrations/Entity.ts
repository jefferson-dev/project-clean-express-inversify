export abstract class Entity<Id = any, Entity = any> {
  protected _id?: Id;
  private _entity: Entity;

  set id(input: Id | undefined) {
    this._id = input;
  }

  get id(): Id | undefined {
    return this._id;
  }

  set entity(input: Entity) {
    this._entity = input;
  }

  get entity(): Entity {
    return this._entity;
  }

  protected setEntity(input: Entity) {
    this.entity = input;
  }

  public toObject() {
    return {
      id: this.id ?? undefined,
      ...this._entity,
    };
  }
}
