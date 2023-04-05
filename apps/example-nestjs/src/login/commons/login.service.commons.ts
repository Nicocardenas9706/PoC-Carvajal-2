import { FindManyOptions, Repository } from "typeorm";

export abstract class BaseServiceLogin<T2>{
    findOneBy(id: string | number) {
        throw new Error("Method not implemented.");
    }
    abstract getRepository() : Repository<T2>;

    findAll(): Promise<T2[]> {
        return this.getRepository().find();
    }

    async findId(id: any): Promise<T2> {
        return this.getRepository().findOne(id);
    }

    save(entity: T2): Promise <T2> {
        return this.getRepository().save(entity);
    }

    saveMany(entities: T2[]): Promise <T2[]> {
        return this.getRepository().save(entities);
    }

    async delete (id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T2>): Promise<number> {
        return this.getRepository().count(options);
    }
}