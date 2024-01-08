import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BenefitPackageCountOrderByAggregateInputObjectSchema } from './BenefitPackageCountOrderByAggregateInput.schema';
import { BenefitPackageMaxOrderByAggregateInputObjectSchema } from './BenefitPackageMaxOrderByAggregateInput.schema';
import { BenefitPackageMinOrderByAggregateInputObjectSchema } from './BenefitPackageMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageOrderByWithAggregationInput> = z
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
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BenefitPackageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BenefitPackageMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BenefitPackageMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BenefitPackageOrderByWithAggregationInputObjectSchema = Schema;
