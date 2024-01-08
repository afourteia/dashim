import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { TenantRelationFilterObjectSchema } from './TenantRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { InsurancePolicyListRelationFilterObjectSchema } from './InsurancePolicyListRelationFilter.schema';
import { SubscriberListRelationFilterObjectSchema } from './SubscriberListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InstitutionWhereInputObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InstitutionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InstitutionWhereInputObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema).array(),
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
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    legacyCode: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    cityHQ: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    email: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    website: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    facebookLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    googleMapsLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    twitterLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    instagramLink: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    latitude: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    longitude: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    institutionCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    managingTenantId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    managingTenant: z
      .union([
        z.lazy(() => TenantRelationFilterObjectSchema),
        z.lazy(() => TenantWhereInputObjectSchema),
      ])
      .optional(),
    policies: z
      .lazy(() => InsurancePolicyListRelationFilterObjectSchema)
      .optional(),
    members: z.lazy(() => SubscriberListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const InstitutionWhereInputObjectSchema = Schema;
