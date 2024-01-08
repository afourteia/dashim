import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from './InstitutionOrderByWithRelationInput.schema';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './InsurancePolicyOrderByWithRelationInput.schema';
import { SubscriberGroupOrderByRelationAggregateInputObjectSchema } from './SubscriberGroupOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberOrderByWithRelationInput> = z
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
    institutionId: z.lazy(() => SortOrderSchema).optional(),
    insurancePolicyId: z.lazy(() => SortOrderSchema).optional(),
    institution: z
      .lazy(() => InstitutionOrderByWithRelationInputObjectSchema)
      .optional(),
    insurancePolicy: z
      .lazy(() => InsurancePolicyOrderByWithRelationInputObjectSchema)
      .optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberOrderByWithRelationInputObjectSchema = Schema;
