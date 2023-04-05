import { Controller } from "@nestjs/common";
import { BaseService } from "../../persona/commons/persona.service.commons";
import { BaseControllerLogin } from "../commons/login.controller.commons";
import { Login } from "../entities/login.enitity";
import { LoginService } from "../services/login.service";
import { BaseServiceLogin } from "../commons/login.service.commons";

@Controller('login')
export class PersonaController extends BaseControllerLogin<Login> {

    
    constructor(private readonly loginService: LoginService){
        super();
    }

        getService(): BaseServiceLogin<Login> {
        return this.loginService;
        
    }
}