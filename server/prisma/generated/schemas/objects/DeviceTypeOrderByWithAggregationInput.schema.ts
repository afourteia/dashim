import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DeviceTypeCountOrderByAggregateInputObjectSchema } from './DeviceTypeCountOrderByAggregateInput.schema';
import { DeviceTypeMaxOrderByAggregateInputObjectSchema } from './DeviceTypeMaxOrderByAggregateInput.schema';
import { DeviceTypeMinOrderByAggregateInputObjectSchema } from './DeviceTypeMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeOrderByWithAggregationInput> = z
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
      .lazy(() => DeviceTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DeviceTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DeviceTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTypeOrderByWithAggregationInputObjectSchema = Schema;
