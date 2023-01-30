import { Entity } from '../../../../domain/abstrations/Entity';

export interface IRepository<T extends Entity> {
  find(): Promise<T[]>;
  findById(id: string): Promise<T | undefined>;
  create(input: T): Promise<T>;
  delete(id: string): Promise<void>;
}
