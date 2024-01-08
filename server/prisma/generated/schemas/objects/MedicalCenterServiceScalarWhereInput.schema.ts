import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema),
        z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema),
        z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema).array(),
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
    medicalCenterCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basePrice: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    medicalCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    templateId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MedicalCenterServiceScalarWhereInputObjectSchema = Schema;
