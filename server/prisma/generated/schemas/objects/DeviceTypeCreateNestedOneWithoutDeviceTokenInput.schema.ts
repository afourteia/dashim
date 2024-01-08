import { z } from 'zod';
import { DeviceTypeCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeCreateOrConnectWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateOrConnectWithoutDeviceTokenInput.schema';
import { DeviceTypeWhereUniqueInputObjectSchema } from './DeviceTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeCreateNestedOneWithoutDeviceTokenInput> =
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
      connect: z.lazy(() => DeviceTypeWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const DeviceTypeCreateNestedOneWithoutDeviceTokenInputObjectSchema =
  Schema;
