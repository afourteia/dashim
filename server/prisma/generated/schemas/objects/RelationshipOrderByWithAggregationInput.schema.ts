import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RelationshipCountOrderByAggregateInputObjectSchema } from './RelationshipCountOrderByAggregateInput.schema';
import { RelationshipMaxOrderByAggregateInputObjectSchema } from './RelationshipMaxOrderByAggregateInput.schema';
import { RelationshipMinOrderByAggregateInputObjectSchema } from './RelationshipMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    arabic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    english: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => RelationshipCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RelationshipMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RelationshipMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RelationshipOrderByWithAggregationInputObjectSchema = Schema;
