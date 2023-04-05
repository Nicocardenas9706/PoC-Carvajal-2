import { BaseService } from "./service.commons";
export declare abstract class BaseController<T> {
    abstract getService(): BaseService<T>;
    findAll(): Promise<T[]>;
    findOne(id: any): Promise<T>;
    count(): Promise<number>;
    save(entity: T): Promise<T>;
    saveMany(entities: T[]): Promise<T[]>;
    delete(id: any): Promise<void>;
}
