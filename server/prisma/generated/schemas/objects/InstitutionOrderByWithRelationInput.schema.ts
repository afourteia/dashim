import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { InsurancePolicyOrderByRelationAggregateInputObjectSchema } from './InsurancePolicyOrderByRelationAggregateInput.schema';
import { SubscriberOrderByRelationAggregateInputObjectSchema } from './SubscriberOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionOrderByWithRelationInput> = z
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
    managingTenant: z
      .lazy(() => TenantOrderByWithRelationInputObjectSchema)
      .optional(),
    policies: z
      .lazy(() => InsurancePolicyOrderByRelationAggregateInputObjectSchema)
      .optional(),
    members: z
      .lazy(() => SubscriberOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const InstitutionOrderByWithRelationInputObjectSchema = Schema;
