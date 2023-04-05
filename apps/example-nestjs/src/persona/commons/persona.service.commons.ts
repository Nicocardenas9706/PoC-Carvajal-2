import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T>{
    findOneBy(id: string | number) {
        throw new Error("Method not implemented.");
    }
    abstract getRepository() : Repository<T>;

    findAll(): Promise<T[]> {
        return this.getRepository().find();
    }

    async findId(id: any): Promise<T> {
        return this.getRepository().findOne(id);
    }

    save(entity: T): Promise <T> {
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]): Promise <T[]> {
        return this.getRepository().save(entities);
    }

    async delete (id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>): Promise<number> {
        return this.getRepository().count(options);
    }
}