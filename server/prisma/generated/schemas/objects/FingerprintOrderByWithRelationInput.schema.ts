import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerTypeOrderByWithRelationInputObjectSchema } from './FingerTypeOrderByWithRelationInput.schema';
import { SubscriberGroupOrderByWithRelationInputObjectSchema } from './SubscriberGroupOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fingerTypeId: z.lazy(() => SortOrderSchema).optional(),
    fingerprintHash: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    fingerType: z
      .lazy(() => FingerTypeOrderByWithRelationInputObjectSchema)
      .optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const FingerprintOrderByWithRelationInputObjectSchema = Schema;
