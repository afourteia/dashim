import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    cardHash: z.string(),
    subscriberGroup: z.lazy(
      () => SubscriberGroupCreateNestedOneWithoutIdCardInputObjectSchema,
    ),
  })
  .strict();

export const IDCardCreateInputObjectSchema = Schema;
