import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => SubscriberGroupScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberGroupScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriberGroupScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => SubscriberGroupScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberGroupScalarWhereWithAggregatesInputObjectSchema,
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
      firstName: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      secondName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      thirdName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      fourthName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      lastName: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      searchName: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      birthDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      genderId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      nationality: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      nationalID: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      residence: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      address: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
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
      subscriberId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      legacyCode: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      relationshipId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      isFingerprintVerificationActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isIdCardVerificationActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isFaceVerificationActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      isVoiceVerificationActive: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupScalarWhereWithAggregatesInputObjectSchema = Schema;
