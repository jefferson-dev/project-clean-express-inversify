import { Entity } from '../../../../domain/abstrations/Entity';

export interface IRepository<T extends Entity> {
  find(): Promise<T[]>;
  findByKey(key: keyof T, value: string): Promise<T | undefined>;
  findById(id: string): Promise<T | undefined>;
  create(input: T): Promise<T>;
  delete(id: string): Promise<void>;
}
