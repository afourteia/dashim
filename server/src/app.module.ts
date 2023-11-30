import { Module } from '@nestjs/common';
import { AppService } from './app.service'; // Dummy code. Refactor later.
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/user.module';
import { AppController } from './app.controller';
import { TrpcModule } from './common/trpc/trpc.module';

@Module({
  imports: [UserModule, TrpcModule, ConfigModule.forRoot()],
  providers: [AppService],
  controllers: [AppController], // Dummy code. Refactor later.
})
export class AppModule {}
