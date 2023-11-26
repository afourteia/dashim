import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { PrismaService } from './prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    PrismaModule.forRoot({
      prismaServiceOptions: {
        explicitConnect: true,
        prismaOptions: {
          log: ['query', 'info', 'warn', 'error'],
        },
      },
    }),
  ],
  controllers: [UserController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
