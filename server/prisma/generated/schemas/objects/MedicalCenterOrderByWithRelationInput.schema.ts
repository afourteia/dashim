import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { MedicalCenterServiceOrderByRelationAggregateInputObjectSchema } from './MedicalCenterServiceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterOrderByWithRelationInput> = z
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
    description: z.lazy(() => SortOrderSchema).optional(),
    cityHQ: z.lazy(() => SortOrderSchema).optional(),
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
    managingTenantId: z.lazy(() => SortOrderSchema).optional(),
    managingTenant: z
      .lazy(() => TenantOrderByWithRelationInputObjectSchema)
      .optional(),
    services: z
      .lazy(() => MedicalCenterServiceOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalCenterOrderByWithRelationInputObjectSchema = Schema;
