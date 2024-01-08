import { z } from 'zod';
import { UserUpdateWithoutMemberOfInputObjectSchema } from './UserUpdateWithoutMemberOfInput.schema';
import { UserUncheckedUpdateWithoutMemberOfInputObjectSchema } from './UserUncheckedUpdateWithoutMemberOfInput.schema';
import { UserCreateWithoutMemberOfInputObjectSchema } from './UserCreateWithoutMemberOfInput.schema';
import { UserUncheckedCreateWithoutMemberOfInputObjectSchema } from './UserUncheckedCreateWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMemberOfInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMemberOfInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutMemberOfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMemberOfInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMemberOfInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutMemberOfInputObjectSchema = Schema;
