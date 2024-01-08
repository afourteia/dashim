import { z } from 'zod';
import { DeviceTokenCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateOrConnectWithoutDeviceTypeInput.schema';
import { DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema } from './DeviceTokenCreateManyDeviceTypeInputEnvelope.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUncheckedCreateNestedManyWithoutDeviceTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DeviceTokenCreateWithoutDeviceTypeInputObjectSchema),
          z
            .lazy(() => DeviceTokenCreateWithoutDeviceTypeInputObjectSchema)
            .array(),
          z.lazy(
            () => DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DeviceTokenUncheckedCreateNestedManyWithoutDeviceTypeInputObjectSchema =
  Schema;
