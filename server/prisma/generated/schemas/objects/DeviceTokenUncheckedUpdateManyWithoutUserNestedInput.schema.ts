import { z } from 'zod';
import { DeviceTokenCreateWithoutUserInputObjectSchema } from './DeviceTokenCreateWithoutUserInput.schema';
import { DeviceTokenUncheckedCreateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutUserInput.schema';
import { DeviceTokenCreateOrConnectWithoutUserInputObjectSchema } from './DeviceTokenCreateOrConnectWithoutUserInput.schema';
import { DeviceTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './DeviceTokenUpsertWithWhereUniqueWithoutUserInput.schema';
import { DeviceTokenCreateManyUserInputEnvelopeObjectSchema } from './DeviceTokenCreateManyUserInputEnvelope.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './DeviceTokenUpdateWithWhereUniqueWithoutUserInput.schema';
import { DeviceTokenUpdateManyWithWhereWithoutUserInputObjectSchema } from './DeviceTokenUpdateManyWithWhereWithoutUserInput.schema';
import { DeviceTokenScalarWhereInputObjectSchema } from './DeviceTokenScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema),
          z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DeviceTokenCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => DeviceTokenCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => DeviceTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DeviceTokenCreateManyUserInputEnvelopeObjectSchema)
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
            () => DeviceTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DeviceTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DeviceTokenUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => DeviceTokenUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const DeviceTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
