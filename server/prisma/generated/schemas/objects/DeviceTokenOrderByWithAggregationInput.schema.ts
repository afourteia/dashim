import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DeviceTokenCountOrderByAggregateInputObjectSchema } from './DeviceTokenCountOrderByAggregateInput.schema';
import { DeviceTokenMaxOrderByAggregateInputObjectSchema } from './DeviceTokenMaxOrderByAggregateInput.schema';
import { DeviceTokenMinOrderByAggregateInputObjectSchema } from './DeviceTokenMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenOrderByWithAggregationInput> = z
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
    name: z.lazy(() => SortOrderSchema).optional(),
    deviceTypeId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DeviceTokenCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DeviceTokenMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DeviceTokenMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTokenOrderByWithAggregationInputObjectSchema = Schema;
