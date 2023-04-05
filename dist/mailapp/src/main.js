"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const mailapp_module_1 = require("./mailapp.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(mailapp_module_1.MailappModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map