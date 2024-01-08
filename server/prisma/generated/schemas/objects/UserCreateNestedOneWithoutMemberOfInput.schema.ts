import { z } from 'zod';
import { UserCreateWithoutMemberOfInputObjectSchema } from './UserCreateWithoutMemberOfInput.schema';
import { UserUncheckedCreateWithoutMemberOfInputObjectSchema } from './UserUncheckedCreateWithoutMemberOfInput.schema';
import { UserCreateOrConnectWithoutMemberOfInputObjectSchema } from './UserCreateOrConnectWithoutMemberOfInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMemberOfInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutMemberOfInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutMemberOfInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutMemberOfInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutMemberOfInputObjectSchema = Schema;
