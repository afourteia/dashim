import { z } from 'zod';
import { FingerprintCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedCreateWithoutSubscriberGroupInput.schema';
import { FingerprintCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateOrConnectWithoutSubscriberGroupInput.schema';
import { FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { FingerprintCreateManySubscriberGroupInputEnvelopeObjectSchema } from './FingerprintCreateManySubscriberGroupInputEnvelope.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { FingerprintUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './FingerprintUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { FingerprintScalarWhereInputObjectSchema } from './FingerprintScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUncheckedUpdateManyWithoutSubscriberGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FingerprintCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => FingerprintCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FingerprintCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => FingerprintCreateManySubscriberGroupInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FingerprintUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FingerprintScalarWhereInputObjectSchema),
          z.lazy(() => FingerprintScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FingerprintUncheckedUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
