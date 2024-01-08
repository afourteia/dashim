import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDeviceTokenInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDeviceTokenInputObjectSchema = Schema;
