"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    findOneBy(id) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        return this.getRepository().find();
    }
    async findId(id) {
        return this.getRepository().findOne(id);
    }
    save(entity) {
        return this.getRepository().save(entity);
    }
    saveMany(entities) {
        return this.getRepository().save(entities);
    }
    async delete(id) {
        await this.getRepository().delete(id);
    }
    count(options) {
        return this.getRepository().count(options);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.commons.js.map