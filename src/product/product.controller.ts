import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post} from '@nestjs/common';
import {ProductModel} from "./product.model";
import {FindProductDto} from "./dto/find-product.dto";

@Controller('product')
export class ProductController {

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {

    }

    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete()
    async delete(@Param('id') id: string) {

    }

    @Patch()
    async patch(@Param('id') id: string, @Body() dto: ProductModel) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {

    }

}
