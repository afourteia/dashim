import { z } from 'zod';
import { InstitutionUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedCreateNestedOneWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateNestedOneWithoutManagingTenantInput.schema';
import { TenantMembersUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMembersUncheckedCreateNestedManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedCreateWithoutTypeInput> = z
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
    ownerId: z.string(),
    assignedToInstitution: z
      .lazy(
        () =>
          InstitutionUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema,
      )
      .optional(),
    assignedToMedicalCenter: z
      .lazy(
        () =>
          MedicalCenterUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema,
      )
      .optional(),
    members: z
      .lazy(
        () =>
          TenantMembersUncheckedCreateNestedManyWithoutTenantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TenantUncheckedCreateWithoutTypeInputObjectSchema = Schema;
