import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonaController } from "./controllers/persona.controller";
import { Persona } from "./entities/persona.enitity";
import { PersonaService } from "./services/persons.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { Login } from "../login/entities/login.enitity";

@Module({
    imports : [TypeOrmModule.forFeature([Persona]), 
    // ClientsModule.register([
    //     { name: 'MAIL_SERVICE', transport: Transport.TCP},
    // ]),
//],
    TypeOrmModule.forFeature([Login])],
    providers : [PersonaService],
    controllers: [PersonaController]

})
export class PersonaModule {

}