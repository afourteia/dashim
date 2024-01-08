import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { InstitutionRelationFilterObjectSchema } from './InstitutionRelationFilter.schema';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';
import { InsurancePolicyRelationFilterObjectSchema } from './InsurancePolicyRelationFilter.schema';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';
import { SubscriberGroupListRelationFilterObjectSchema } from './SubscriberGroupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubscriberWhereInputObjectSchema),
        z.lazy(() => SubscriberWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubscriberWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubscriberWhereInputObjectSchema),
        z.lazy(() => SubscriberWhereInputObjectSchema).array(),
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
    institutionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    insurancePolicyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institution: z
      .union([
        z.lazy(() => InstitutionRelationFilterObjectSchema),
        z.lazy(() => InstitutionWhereInputObjectSchema),
      ])
      .optional(),
    insurancePolicy: z
      .union([
        z.lazy(() => InsurancePolicyRelationFilterObjectSchema),
        z.lazy(() => InsurancePolicyWhereInputObjectSchema),
      ])
      .optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberWhereInputObjectSchema = Schema;
