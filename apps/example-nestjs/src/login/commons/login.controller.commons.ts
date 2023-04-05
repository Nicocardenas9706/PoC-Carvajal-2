import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Put } from "@nestjs/common/decorators";
import { BaseServiceLogin } from "./login.service.commons";


export abstract class BaseControllerLogin<T2>{

    abstract getService() : BaseServiceLogin<T2>;

    @Get()
    async findAll(): Promise<T2[]> {
        return await this.getService().findAll();
    }


    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: any)  {
        return await this.getService().findId({where:{id}});
    }

    @Get('count')
    async count(): Promise<number> {
        return await this.getService().count();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T2): Promise<T2> {
        return await this.getService().save(entity);
    }

    @Put()
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T2[]): Promise<T2[]> {
        return await this.getService().saveMany(entities);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return await this.getService().delete(id);
    }


}