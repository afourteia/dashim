import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerprintCountOrderByAggregateInputObjectSchema } from './FingerprintCountOrderByAggregateInput.schema';
import { FingerprintMaxOrderByAggregateInputObjectSchema } from './FingerprintMaxOrderByAggregateInput.schema';
import { FingerprintMinOrderByAggregateInputObjectSchema } from './FingerprintMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => FingerprintCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FingerprintMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FingerprintMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FingerprintOrderByWithAggregationInputObjectSchema = Schema;
