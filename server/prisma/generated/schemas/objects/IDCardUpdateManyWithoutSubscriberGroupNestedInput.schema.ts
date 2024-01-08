import { z } from 'zod';
import { IDCardCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedCreateWithoutSubscriberGroupInput.schema';
import { IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateOrConnectWithoutSubscriberGroupInput.schema';
import { IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { IDCardCreateManySubscriberGroupInputEnvelopeObjectSchema } from './IDCardCreateManySubscriberGroupInputEnvelope.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { IDCardUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './IDCardUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { IDCardScalarWhereInputObjectSchema } from './IDCardScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateManyWithoutSubscriberGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema),
          z
            .lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => IDCardCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              IDCardUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => IDCardScalarWhereInputObjectSchema),
          z.lazy(() => IDCardScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IDCardUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
