import { Test, TestingModule } from '@nestjs/testing';
import { PersonaController } from '../src/persona/controllers/persona.controller';
import { PersonaService } from '../src/persona/services/persons.service';
import { PersonaModule } from '../src/persona/persona.module';


describe('PersonaController', () => {
  let controller: PersonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaModule]
    }).compile();

  controller = module.get<PersonaController>(PersonaController);
    });

    it('should return an array of db', async () => {

      expect(controller).toBeDefined();
    });

});