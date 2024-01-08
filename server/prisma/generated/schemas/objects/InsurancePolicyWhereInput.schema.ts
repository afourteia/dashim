import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { SubscriberListRelationFilterObjectSchema } from './SubscriberListRelationFilter.schema';
import { BenefitPackageRelationFilterObjectSchema } from './BenefitPackageRelationFilter.schema';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InsurancePolicyWhereInputObjectSchema),
        z.lazy(() => InsurancePolicyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InsurancePolicyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InsurancePolicyWhereInputObjectSchema),
        z.lazy(() => InsurancePolicyWhereInputObjectSchema).array(),
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
    institutionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institution: z
      .union([
        z.lazy(() => InstitutionRelationFilterObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema),
      ])
      .optional(),
    subscribers: z
      .lazy(() => SubscriberListRelationFilterObjectSchema)
      .optional(),
    beneftiPackage: z
      .union([
        z.lazy(() => BenefitPackageRelationFilterObjectSchema),
        z.lazy(() => BenefitPackageWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const InsurancePolicyWhereInputObjectSchema = Schema;
