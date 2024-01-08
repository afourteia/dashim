import { z } from 'zod';
import { FingerprintCreateWithoutFingerTypeInputObjectSchema } from './FingerprintCreateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerprintCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerprintCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerprintUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema } from './FingerprintUpsertWithWhereUniqueWithoutFingerTypeInput.schema';
import { FingerprintCreateManyFingerTypeInputEnvelopeObjectSchema } from './FingerprintCreateManyFingerTypeInputEnvelope.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema } from './FingerprintUpdateWithWhereUniqueWithoutFingerTypeInput.schema';
import { FingerprintUpdateManyWithWhereWithoutFingerTypeInputObjectSchema } from './FingerprintUpdateManyWithWhereWithoutFingerTypeInput.schema';
import { FingerprintScalarWhereInputObjectSchema } from './FingerprintScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateManyWithoutFingerTypeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FingerprintCreateWithoutFingerTypeInputObjectSchema),
          z
            .lazy(() => FingerprintCreateWithoutFingerTypeInputObjectSchema)
            .array(),
          z.lazy(
            () => FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => FingerprintCreateOrConnectWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintCreateOrConnectWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FingerprintUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FingerprintCreateManyFingerTypeInputEnvelopeObjectSchema)
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
              FingerprintUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FingerprintUpdateManyWithWhereWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintUpdateManyWithWhereWithoutFingerTypeInputObjectSchema,
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

export const FingerprintUpdateManyWithoutFingerTypeNestedInputObjectSchema =
  Schema;
