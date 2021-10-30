import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopFoodModel } from './top-food.model';
import { FindTopFoodDto } from './dto/find-top-food.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-food')
export class TopFoodController {
  constructor(private readonly configServer: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopFoodModel, '_id'>) {
    console.log(this.configServer.get('TEST')); // example taken param from .env
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopFoodModel) {}

  @Get('byProduct/:productId')
  async find(@Param('productId') dto: FindTopFoodDto) {}
}
