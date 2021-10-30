import { Module } from '@nestjs/common';
import { TopFoodController } from './top-food.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [TopFoodController],
})
export class TopFoodModule {}
