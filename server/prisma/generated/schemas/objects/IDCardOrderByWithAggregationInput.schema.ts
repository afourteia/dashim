import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { IDCardCountOrderByAggregateInputObjectSchema } from './IDCardCountOrderByAggregateInput.schema';
import { IDCardMaxOrderByAggregateInputObjectSchema } from './IDCardMaxOrderByAggregateInput.schema';
import { IDCardMinOrderByAggregateInputObjectSchema } from './IDCardMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardOrderByWithAggregationInput> = z
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
    cardHash: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => IDCardCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => IDCardMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => IDCardMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const IDCardOrderByWithAggregationInputObjectSchema = Schema;
