import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}


  @EventPattern('new_mail')
  handleNewEmail(data:any){
    console.log('Este es el evento entrante', data)
  }
    @Get()
  getHello(): string {
    return this.mailappService.getHello();
  }
}
