import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionCountOrderByAggregateInputObjectSchema } from './InstitutionCountOrderByAggregateInput.schema';
import { InstitutionAvgOrderByAggregateInputObjectSchema } from './InstitutionAvgOrderByAggregateInput.schema';
import { InstitutionMaxOrderByAggregateInputObjectSchema } from './InstitutionMaxOrderByAggregateInput.schema';
import { InstitutionMinOrderByAggregateInputObjectSchema } from './InstitutionMinOrderByAggregateInput.schema';
import { InstitutionSumOrderByAggregateInputObjectSchema } from './InstitutionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionOrderByWithAggregationInput> = z
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
    code: z.lazy(() => SortOrderSchema).optional(),
    legacyCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    cityHQ: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    address: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    website: z.lazy(() => SortOrderSchema).optional(),
    facebookLink: z.lazy(() => SortOrderSchema).optional(),
    googleMapsLink: z.lazy(() => SortOrderSchema).optional(),
    twitterLink: z.lazy(() => SortOrderSchema).optional(),
    instagramLink: z.lazy(() => SortOrderSchema).optional(),
    latitude: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    longitude: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    institutionCode: z.lazy(() => SortOrderSchema).optional(),
    managingTenantId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InstitutionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => InstitutionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => InstitutionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => InstitutionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => InstitutionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InstitutionOrderByWithAggregationInputObjectSchema = Schema;
