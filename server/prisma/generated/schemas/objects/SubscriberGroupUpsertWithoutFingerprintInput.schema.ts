import { z } from 'zod';
import { SubscriberGroupUpdateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUpdateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutFingerprintInput.schema';
import { SubscriberGroupCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateWithoutFingerprintInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutFingerprintInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberGroupUpdateWithoutFingerprintInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedUpdateWithoutFingerprintInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberGroupCreateWithoutFingerprintInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedCreateWithoutFingerprintInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberGroupUpsertWithoutFingerprintInputObjectSchema = Schema;
