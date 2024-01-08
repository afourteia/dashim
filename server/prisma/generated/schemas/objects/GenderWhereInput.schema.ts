import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { SubscriberGroupListRelationFilterObjectSchema } from './SubscriberGroupListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GenderWhereInputObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GenderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GenderWhereInputObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema).array(),
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
    arabic: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    english: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const GenderWhereInputObjectSchema = Schema;
