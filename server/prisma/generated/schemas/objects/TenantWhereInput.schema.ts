import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TenantTypeRelationFilterObjectSchema } from './TenantTypeRelationFilter.schema';
import { TenantTypeWhereInputObjectSchema } from './TenantTypeWhereInput.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { MedicalCenterRelationFilterObjectSchema } from './MedicalCenterRelationFilter.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TenantMembersListRelationFilterObjectSchema } from './TenantMembersListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TenantWhereInputObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TenantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TenantWhereInputObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    typeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    logo: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    website: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    city: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    country: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => TenantTypeRelationFilterObjectSchema),
        z.lazy(() => TenantTypeWhereInputObjectSchema),
      ])
      .optional(),
    assignedToInstitution: z
      .union([
        z.lazy(() => InstitutionRelationFilterObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    assignedToMedicalCenter: z
      .union([
        z.lazy(() => MedicalCenterRelationFilterObjectSchema),
        z.lazy(() => MedicalCenterWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    members: z
      .lazy(() => TenantMembersListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TenantWhereInputObjectSchema = Schema;
