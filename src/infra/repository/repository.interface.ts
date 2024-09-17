import { DeleteOptions, UpdateOptions, type FindOneOptions } from 'typeorm';

export interface IRepository<T, E> {
  create: (data: E) => Promise<T>;
  update: (data: E, entityId: number) => Promise<UpdateOptions>;
  delete: (id: number) => Promise<DeleteOptions>;
  findById: (id: number) => Promise<T>;
  findAll: () => Promise<T[]>;
  findOneWithRelations: (relations: FindOneOptions<T>) => any;
}
