import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoleCountOrderByAggregateInputObjectSchema } from './RoleCountOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputObjectSchema } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputObjectSchema } from './RoleMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoleOrderByWithAggregationInputObjectSchema = Schema;
