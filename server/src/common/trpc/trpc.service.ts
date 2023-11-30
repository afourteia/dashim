import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { router, publicProcedure } from './trpc.router';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { UserService } from '@models/user/user.service';
import { createUserRouter } from '@models/user/user.trpc';

@Injectable()
export class TrpcService implements OnModuleInit {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private userService: UserService,
  ) {}

  onModuleInit() {
    const app = this.httpAdapterHost.httpAdapter.getInstance();
    const appRouter = router({
      greeting: publicProcedure.query(() => 'hello tRPC v10!'),
      user: createUserRouter(this.userService),
    });
    const trpcMiddleware = createExpressMiddleware({ router: appRouter });
    app.use('/trpc', trpcMiddleware);
  }
}
