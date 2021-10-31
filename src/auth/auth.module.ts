import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    // So that typegoose knows how to work with models in the database
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User', // Name collection def. name = typegooseClass
        },
      },
    ]),
  ],
  providers: [AuthService],
})
export class AuthModule {
}

