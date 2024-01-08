import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FingerTypeCountOrderByAggregateInputObjectSchema } from './FingerTypeCountOrderByAggregateInput.schema';
import { FingerTypeMaxOrderByAggregateInputObjectSchema } from './FingerTypeMaxOrderByAggregateInput.schema';
import { FingerTypeMinOrderByAggregateInputObjectSchema } from './FingerTypeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeOrderByWithAggregationInput> = z
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
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FingerTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FingerTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FingerTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FingerTypeOrderByWithAggregationInputObjectSchema = Schema;
