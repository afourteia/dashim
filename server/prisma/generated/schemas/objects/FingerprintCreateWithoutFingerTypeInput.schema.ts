import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutFingerprintInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateWithoutFingerTypeInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    fingerprintHash: z.string(),
    subscriberGroup: z.lazy(
      () => SubscriberGroupCreateNestedOneWithoutFingerprintInputObjectSchema,
    ),
  })
  .strict();

export const FingerprintCreateWithoutFingerTypeInputObjectSchema = Schema;
