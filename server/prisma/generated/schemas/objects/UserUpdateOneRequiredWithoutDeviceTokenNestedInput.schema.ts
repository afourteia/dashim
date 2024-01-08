import { z } from 'zod';
import { UserCreateWithoutDeviceTokenInputObjectSchema } from './UserCreateWithoutDeviceTokenInput.schema';
import { UserUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedCreateWithoutDeviceTokenInput.schema';
import { UserCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './UserCreateOrConnectWithoutDeviceTokenInput.schema';
import { UserUpsertWithoutDeviceTokenInputObjectSchema } from './UserUpsertWithoutDeviceTokenInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDeviceTokenInputObjectSchema } from './UserUpdateWithoutDeviceTokenInput.schema';
import { UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './UserUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDeviceTokenNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDeviceTokenInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutDeviceTokenInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutDeviceTokenInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutDeviceTokenInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutDeviceTokenInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutDeviceTokenInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutDeviceTokenNestedInputObjectSchema =
  Schema;
