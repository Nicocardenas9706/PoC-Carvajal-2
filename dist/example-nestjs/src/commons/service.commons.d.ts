import { FindManyOptions, Repository } from "typeorm";
export declare abstract class BaseService<T> {
    findOneBy(id: string | number): void;
    abstract getRepository(): Repository<T>;
    findAll(): Promise<T[]>;
    findId(id: any): Promise<T>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    delete(id: any): Promise<void>;
    count(options?: FindManyOptions<T>): Promise<number>;
}
