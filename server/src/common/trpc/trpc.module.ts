import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { UserModule } from '../../models/user/user.module';

@Module({
  imports: [UserModule],
  providers: [TrpcService],
})
export class TrpcModule {}
