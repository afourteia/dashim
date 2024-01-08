import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantTypeCountOrderByAggregateInputObjectSchema } from './TenantTypeCountOrderByAggregateInput.schema';
import { TenantTypeMaxOrderByAggregateInputObjectSchema } from './TenantTypeMaxOrderByAggregateInput.schema';
import { TenantTypeMinOrderByAggregateInputObjectSchema } from './TenantTypeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeOrderByWithAggregationInput> = z
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
      .lazy(() => TenantTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TenantTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TenantTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantTypeOrderByWithAggregationInputObjectSchema = Schema;
