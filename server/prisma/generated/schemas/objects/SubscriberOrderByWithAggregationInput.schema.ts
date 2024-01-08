import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubscriberCountOrderByAggregateInputObjectSchema } from './SubscriberCountOrderByAggregateInput.schema';
import { SubscriberMaxOrderByAggregateInputObjectSchema } from './SubscriberMaxOrderByAggregateInput.schema';
import { SubscriberMinOrderByAggregateInputObjectSchema } from './SubscriberMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberOrderByWithAggregationInput> = z
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
    institutionId: z.lazy(() => SortOrderSchema).optional(),
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SubscriberCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SubscriberMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SubscriberMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberOrderByWithAggregationInputObjectSchema = Schema;
