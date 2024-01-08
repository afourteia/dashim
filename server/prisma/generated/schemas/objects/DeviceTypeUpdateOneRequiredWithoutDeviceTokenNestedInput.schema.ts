import { z } from 'zod';
import { DeviceTypeCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateOrConnectWithoutDeviceTokenInput.schema';
import { DeviceTypeUpsertWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUpsertWithoutDeviceTokenInput.schema';
import { DeviceTypeWhereUniqueInputObjectSchema } from './DeviceTypeWhereUniqueInput.schema';
import { DeviceTypeUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedUpdateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeUpdateOneRequiredWithoutDeviceTokenNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DeviceTypeCreateWithoutDeviceTokenInputObjectSchema),
          z.lazy(
            () => DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DeviceTypeCreateOrConnectWithoutDeviceTokenInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => DeviceTypeUpsertWithoutDeviceTokenInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DeviceTypeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DeviceTypeUpdateWithoutDeviceTokenInputObjectSchema),
          z.lazy(
            () => DeviceTypeUncheckedUpdateWithoutDeviceTokenInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const DeviceTypeUpdateOneRequiredWithoutDeviceTokenNestedInputObjectSchema =
  Schema;
