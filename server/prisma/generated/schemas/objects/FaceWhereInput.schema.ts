import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { SubscriberGroupRelationFilterObjectSchema } from './SubscriberGroupRelationFilter.schema';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FaceWhereInputObjectSchema),
        z.lazy(() => FaceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FaceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FaceWhereInputObjectSchema),
        z.lazy(() => FaceWhereInputObjectSchema).array(),
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
    faceHash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subscriberGroupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subscriberGroup: z
      .union([
        z.lazy(() => SubscriberGroupRelationFilterObjectSchema),
        z.lazy(() => SubscriberGroupWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const FaceWhereInputObjectSchema = Schema;