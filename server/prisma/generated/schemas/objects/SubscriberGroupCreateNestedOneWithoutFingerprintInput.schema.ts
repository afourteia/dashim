import { z } from 'zod';
import { SubscriberGroupCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFingerprintInput.schema';
import { SubscriberGroupCreateOrConnectWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutFingerprintInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutFingerprintInput> =
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
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutFingerprintInputObjectSchema =
  Schema;
