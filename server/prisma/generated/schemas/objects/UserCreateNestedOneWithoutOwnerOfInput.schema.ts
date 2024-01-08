import { z } from 'zod';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';
import { UserCreateOrConnectWithoutOwnerOfInputObjectSchema } from './UserCreateOrConnectWithoutOwnerOfInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnerOfInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutOwnerOfInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutOwnerOfInputObjectSchema = Schema;
