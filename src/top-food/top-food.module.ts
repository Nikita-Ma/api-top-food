import { Module } from '@nestjs/common';
import { TopFoodController } from './top-food.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopFoodModel } from './top-food.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule,
    TypegooseModule.forFeature([{
      typegooseClass: TopFoodModel,
      schemaOptions: {
        collection: 'TopFood',
      },
    }]),
  ],
  controllers: [TopFoodController],
})
export class TopFoodModule {
}
