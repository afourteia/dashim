import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantMembersCountOrderByAggregateInputObjectSchema } from './TenantMembersCountOrderByAggregateInput.schema';
import { TenantMembersMaxOrderByAggregateInputObjectSchema } from './TenantMembersMaxOrderByAggregateInput.schema';
import { TenantMembersMinOrderByAggregateInputObjectSchema } from './TenantMembersMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersOrderByWithAggregationInput> = z
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
    tenantId: z.lazy(() => SortOrderSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TenantMembersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TenantMembersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TenantMembersMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantMembersOrderByWithAggregationInputObjectSchema = Schema;
