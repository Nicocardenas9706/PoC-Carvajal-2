import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Inject, Injectable } from "@nestjs/common/decorators";
import { ClientProxy } from "@nestjs/microservices";
import { BaseServiceLogin } from "../commons/login.service.commons";
import { Login } from "../entities/login.enitity";


@Injectable()
export class LoginService extends BaseServiceLogin<Login> {

    
    constructor(@InjectRepository(Login) private personaRepo : Repository<Login>)
     //@Inject('MATH_SERVICE') private clientMail: ClientProxy)
    {
        super();
        
    }


    getRepository(): Repository<Login> {
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