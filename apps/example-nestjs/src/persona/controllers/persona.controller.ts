import { Controller } from "@nestjs/common";
import { BaseService } from "../commons/persona.service.commons";
import { Persona } from "../entities/persona.enitity";
import { PersonaService } from "../services/persons.service";
import { BaseController } from "../commons/persona.controller.commons";

@Controller('persona')
export class PersonaController extends BaseController<Persona> {

    
    constructor(private readonly personaService: PersonaService){
        super();
    }

        getService(): BaseService<Persona> {
        return this.personaService;
        
    }
}