import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://NikitaB03:NikitaB03@cluster0.4ew2jct.mongodb.net/nest-jsdemo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
