import { z } from 'zod';
import { FingerprintCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedCreateWithoutSubscriberGroupInput.schema';
import { FingerprintCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateOrConnectWithoutSubscriberGroupInput.schema';
import { FingerprintCreateManySubscriberGroupInputEnvelopeObjectSchema } from './FingerprintCreateManySubscriberGroupInputEnvelope.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateNestedManyWithoutSubscriberGroupInput> =
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
      createMany: z
        .lazy(
          () => FingerprintCreateManySubscriberGroupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
          z.lazy(() => FingerprintWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FingerprintCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
