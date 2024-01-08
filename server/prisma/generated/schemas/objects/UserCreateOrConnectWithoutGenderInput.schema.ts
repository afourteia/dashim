import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGenderInputObjectSchema } from './UserCreateWithoutGenderInput.schema';
import { UserUncheckedCreateWithoutGenderInputObjectSchema } from './UserUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutGenderInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutGenderInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutGenderInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutGenderInputObjectSchema = Schema;
