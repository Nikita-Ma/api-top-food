import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopFoodModule } from './top-food/top-food.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    TopFoodModule,
    ProductModule,
    ReviewModule,
  ],
})
export class AppModule {}
