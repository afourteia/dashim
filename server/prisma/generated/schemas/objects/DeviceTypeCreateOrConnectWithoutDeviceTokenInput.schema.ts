import { z } from 'zod';
import { DeviceTypeWhereUniqueInputObjectSchema } from './DeviceTypeWhereUniqueInput.schema';
import { DeviceTypeCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeCreateOrConnectWithoutDeviceTokenInput> =
  z
    .object({
      where: z.lazy(() => DeviceTypeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DeviceTypeCreateWithoutDeviceTokenInputObjectSchema),
        z.lazy(
          () => DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DeviceTypeCreateOrConnectWithoutDeviceTokenInputObjectSchema =
  Schema;
