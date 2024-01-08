import { z } from 'zod';
import { SubscriberGroupCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFingerprintInput.schema';
import { SubscriberGroupCreateOrConnectWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutFingerprintInput.schema';
import { SubscriberGroupUpsertWithoutFingerprintInputObjectSchema } from './SubscriberGroupUpsertWithoutFingerprintInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUpdateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutFingerprintNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => SubscriberGroupCreateWithoutFingerprintInputObjectSchema,
          ),
          z.lazy(
            () =>
              SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            SubscriberGroupCreateOrConnectWithoutFingerprintInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutFingerprintInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriberGroupUpdateWithoutFingerprintInputObjectSchema,
          ),
          z.lazy(
            () =>
              SubscriberGroupUncheckedUpdateWithoutFingerprintInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutFingerprintNestedInputObjectSchema =
  Schema;
