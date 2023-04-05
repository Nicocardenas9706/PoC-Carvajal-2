import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Persona } from "../entities/persona.enitity";
import { PersonaService } from "../services/persons.service";
export declare class PersonaController extends BaseController<Persona> {
    private readonly personaService;
    constructor(personaService: PersonaService);
    getService(): BaseService<Persona>;
}
