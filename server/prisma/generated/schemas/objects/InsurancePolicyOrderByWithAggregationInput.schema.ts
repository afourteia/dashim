import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InsurancePolicyCountOrderByAggregateInputObjectSchema } from './InsurancePolicyCountOrderByAggregateInput.schema';
import { InsurancePolicyMaxOrderByAggregateInputObjectSchema } from './InsurancePolicyMaxOrderByAggregateInput.schema';
import { InsurancePolicyMinOrderByAggregateInputObjectSchema } from './InsurancePolicyMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyOrderByWithAggregationInput> = z
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
    institutionId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InsurancePolicyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => InsurancePolicyMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => InsurancePolicyMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InsurancePolicyOrderByWithAggregationInputObjectSchema = Schema;
