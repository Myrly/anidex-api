import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { AnimalModule } from './animal/animal.module';
import { ContinentModule } from './continent/continent.module';
import { ConservationStatusModule } from './conservation-status/conservation-status.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_CREDENTIALS_URI'),
        dbName: 'anidex',
      }),
      inject: [ConfigService],
    }),
    AnimalModule,
    ContinentModule,
    ConservationStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
