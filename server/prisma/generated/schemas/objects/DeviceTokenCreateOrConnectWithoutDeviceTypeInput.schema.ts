import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateOrConnectWithoutDeviceTypeInput> =
  z
    .object({
      where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DeviceTokenCreateWithoutDeviceTypeInputObjectSchema),
        z.lazy(
          () => DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema =
  Schema;
