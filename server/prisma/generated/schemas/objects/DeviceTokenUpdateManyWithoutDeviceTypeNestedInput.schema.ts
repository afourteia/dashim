import { z } from 'zod';
import { DeviceTokenCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenUncheckedCreateWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutDeviceTypeInput.schema';
import { DeviceTokenCreateOrConnectWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateOrConnectWithoutDeviceTypeInput.schema';
import { DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInput.schema';
import { DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema } from './DeviceTokenCreateManyDeviceTypeInputEnvelope.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInput.schema';
import { DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema } from './DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInput.schema';
import { DeviceTokenScalarWhereInputObjectSchema } from './DeviceTokenScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUpdateManyWithoutDeviceTypeNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUpsertWithWhereUniqueWithoutDeviceTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
          z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUpdateWithWhereUniqueWithoutDeviceTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUpdateManyWithWhereWithoutDeviceTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DeviceTokenScalarWhereInputObjectSchema),
          z.lazy(() => DeviceTokenScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DeviceTokenUpdateManyWithoutDeviceTypeNestedInputObjectSchema =
  Schema;
