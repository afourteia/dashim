import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FaceCountOrderByAggregateInputObjectSchema } from './FaceCountOrderByAggregateInput.schema';
import { FaceMaxOrderByAggregateInputObjectSchema } from './FaceMaxOrderByAggregateInput.schema';
import { FaceMinOrderByAggregateInputObjectSchema } from './FaceMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceOrderByWithAggregationInput> = z
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
    faceHash: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FaceCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FaceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FaceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FaceOrderByWithAggregationInputObjectSchema = Schema;
