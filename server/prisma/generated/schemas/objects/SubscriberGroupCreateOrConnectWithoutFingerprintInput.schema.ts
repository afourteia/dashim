import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutFingerprintInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutFingerprintInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutFingerprintInputObjectSchema =
  Schema;
