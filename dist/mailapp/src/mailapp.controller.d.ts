import { MailappService } from './mailapp.service';
export declare class MailappController {
    private readonly mailappService;
    constructor(mailappService: MailappService);
    getHello(): string;
}
