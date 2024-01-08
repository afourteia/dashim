import { z } from 'zod';
import { FingerprintCreateWithoutFingerTypeInputObjectSchema } from './FingerprintCreateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerprintCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerprintCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerprintCreateManyFingerTypeInputEnvelopeObjectSchema } from './FingerprintCreateManyFingerTypeInputEnvelope.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateNestedManyWithoutFingerTypeInput> =
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
      createMany: z
        .lazy(() => FingerprintCreateManyFingerTypeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FingerprintCreateNestedManyWithoutFingerTypeInputObjectSchema =
  Schema;
