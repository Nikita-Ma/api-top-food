import { Module } from '@nestjs/common';
import { TopFoodController } from './top-food.controller';

@Module({
  controllers: [TopFoodController]
})
export class TopFoodModule {}
