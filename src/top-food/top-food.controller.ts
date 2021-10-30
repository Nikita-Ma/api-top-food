import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TopFoodModel} from "./top-food.model";
import {FindTopFoodDto} from "./dto/find-top-food.dto";

@Controller('top-food')
export class TopFoodController {
    @Post('create')
    async create(@Body() dto: Omit<TopFoodModel, '_id'>) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopFoodModel) {
    }

    @Get('byProduct/:productId')
    async find(@Param('productId') dto: FindTopFoodDto) {

    }
}
