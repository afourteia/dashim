import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantTypeOrderByWithRelationInputObjectSchema } from './TenantTypeOrderByWithRelationInput.schema';
import { InstitutionOrderByWithRelationInputObjectSchema } from './InstitutionOrderByWithRelationInput.schema';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './MedicalCenterOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TenantMembersOrderByRelationAggregateInputObjectSchema } from './TenantMembersOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = z
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
    typeId: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    logo: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    website: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z
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
    city: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    country: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    type: z
      .lazy(() => TenantTypeOrderByWithRelationInputObjectSchema)
      .optional(),
    assignedToInstitution: z
      .lazy(() => InstitutionOrderByWithRelationInputObjectSchema)
      .optional(),
    assignedToMedicalCenter: z
      .lazy(() => MedicalCenterOrderByWithRelationInputObjectSchema)
      .optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    members: z
      .lazy(() => TenantMembersOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantOrderByWithRelationInputObjectSchema = Schema;
