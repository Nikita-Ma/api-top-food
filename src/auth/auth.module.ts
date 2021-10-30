import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from './auth.model';

@Module({
  controllers: [AuthController],
  imports: [
    // So that typegoose knows how to work with models in the database
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: 'Auth', // Name collection def. name = typegooseClass
        },
      },
    ]),
  ],
})
export class AuthModule {
}

