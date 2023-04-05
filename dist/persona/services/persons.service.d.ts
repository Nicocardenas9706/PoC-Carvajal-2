import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Persona } from "../entities/persona.enitity";
export declare class PersonaService extends BaseService<Persona> {
    private personaRepo;
    constructor(personaRepo: Repository<Persona>);
    getRepository(): Repository<Persona>;
}
