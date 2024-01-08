import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMemberOfInputObjectSchema } from './UserCreateWithoutMemberOfInput.schema';
import { UserUncheckedCreateWithoutMemberOfInputObjectSchema } from './UserUncheckedCreateWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMemberOfInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutMemberOfInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMemberOfInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutMemberOfInputObjectSchema = Schema;
