"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const Logger_1 = require("nestjs-pino/Logger");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
    });
    await app.listen();
    app.useLogger(app.get(Logger_1.Logger));
}
bootstrap();
//# sourceMappingURL=main.js.map