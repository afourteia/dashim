import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { MedicalCenterServiceListRelationFilterObjectSchema } from './MedicalCenterServiceListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema),
        z
          .lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema),
        z
          .lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema)
          .array(),
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
    dalilCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basePrice: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    services: z
      .lazy(() => MedicalCenterServiceListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MedicalCenterServiceTemplateWhereInputObjectSchema = Schema;
