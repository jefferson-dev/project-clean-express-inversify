import { Entity } from '../../../../domain/abstrations/Entity';
import { IRepository } from './IRepository';

export abstract class Repository<T extends Entity> implements IRepository<T> {
  protected readonly repository: T[];

  constructor() {
    this.repository = [];
  }

  public async find(): Promise<T[]> {
    return this.repository;
  }

  public async findById(id: string): Promise<T | undefined> {
    return this.repository.find((i) => i.id === id);
  }

  public async create(input: T): Promise<T> {
    this.repository.push(input.toObject());

    return input.toObject();
  }

  public async delete(id: string): Promise<void> {
    const index = this.repository.findIndex((i) => i.id === id);

    this.repository.splice(index, 1);
  }
}
