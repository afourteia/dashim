import { z } from 'zod';
import { TenantTypeCreateNestedOneWithoutTenantInputObjectSchema } from './TenantTypeCreateNestedOneWithoutTenantInput.schema';
import { InstitutionCreateNestedOneWithoutManagingTenantInputObjectSchema } from './InstitutionCreateNestedOneWithoutManagingTenantInput.schema';
import { MedicalCenterCreateNestedOneWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutManagingTenantInput.schema';
import { UserCreateNestedOneWithoutOwnerOfInputObjectSchema } from './UserCreateNestedOneWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateWithoutMembersInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    logo: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    type: z.lazy(() => TenantTypeCreateNestedOneWithoutTenantInputObjectSchema),
    assignedToInstitution: z
      .lazy(
        () => InstitutionCreateNestedOneWithoutManagingTenantInputObjectSchema,
      )
      .optional(),
    assignedToMedicalCenter: z
      .lazy(
        () =>
          MedicalCenterCreateNestedOneWithoutManagingTenantInputObjectSchema,
      )
      .optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutOwnerOfInputObjectSchema),
  })
  .strict();

export const TenantCreateWithoutMembersInputObjectSchema = Schema;
