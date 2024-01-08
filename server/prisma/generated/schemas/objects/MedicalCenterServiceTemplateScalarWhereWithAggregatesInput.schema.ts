import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      isPublished: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isSoftDeleted: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      deactivationReason: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      name: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      dalilCode: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      basePrice: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema =
  Schema;
