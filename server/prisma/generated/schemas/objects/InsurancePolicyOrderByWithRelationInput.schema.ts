import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from './InstitutionOrderByWithRelationInput.schema';
import { SubscriberOrderByRelationAggregateInputObjectSchema } from './SubscriberOrderByRelationAggregateInput.schema';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './BenefitPackageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyOrderByWithRelationInput> = z
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
    institution: z
      .lazy(() => InstitutionOrderByWithRelationInputObjectSchema)
      .optional(),
    subscribers: z
      .lazy(() => SubscriberOrderByRelationAggregateInputObjectSchema)
      .optional(),
    beneftiPackage: z
      .lazy(() => BenefitPackageOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const InsurancePolicyOrderByWithRelationInputObjectSchema = Schema;
