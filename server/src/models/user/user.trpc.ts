// src/user/user.trpc.ts
import { router, publicProcedure } from '../../common/trpc/trpc.router';
import { UserService } from './user.service';
import { EmailAndPassword } from './user.dto';

export function createUserRouter(userService: UserService) {
  return router({
    createOne: publicProcedure
      .input(EmailAndPassword)
      .mutation(async (opts) => {
        // Use UserService for business logic
        const user = await userService.createOne(opts.input);
        return user;
      }),
    findMany: publicProcedure.query(async () => {
      return await userService.findMany();
    }),
    // ... other user-related procedures
  });
}
