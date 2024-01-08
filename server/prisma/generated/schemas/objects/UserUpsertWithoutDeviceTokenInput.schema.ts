import { z } from 'zod';
import { UserUpdateWithoutDeviceTokenInputObjectSchema } from './UserUpdateWithoutDeviceTokenInput.schema';
import { UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedUpdateWithoutDeviceTokenInput.schema';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutDeviceTokenInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDeviceTokenInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutDeviceTokenInputObjectSchema = Schema;
