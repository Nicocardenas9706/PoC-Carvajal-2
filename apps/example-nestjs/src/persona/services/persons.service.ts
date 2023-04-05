import { BaseService } from "../commons/persona.service.commons";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "../entities/persona.enitity";
import { Inject, Injectable } from "@nestjs/common/decorators";
import { ClientProxy } from "@nestjs/microservices";


@Injectable()
export class PersonaService extends BaseService<Persona> {

    
    constructor(@InjectRepository(Persona) private personaRepo : Repository<Persona>)
     //@Inject('MATH_SERVICE') private clientMail: ClientProxy)
    {
        super();
        
    }


    getRepository(): Repository<Persona> {
        return this.personaRepo;
    }

    // newUser(){
    //     const mockUser = {
    //         email: 'nc@gmail.com',
    //         name: 'ncr' 
    //     }
    //     this.clientMail.emit('new_mail', mockUser)
    //     return 'Se envio a cola'
    // }

}