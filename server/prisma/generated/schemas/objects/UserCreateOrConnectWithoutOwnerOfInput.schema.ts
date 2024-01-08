import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnerOfInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutOwnerOfInputObjectSchema = Schema;
