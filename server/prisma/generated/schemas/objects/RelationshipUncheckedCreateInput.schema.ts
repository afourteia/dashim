import { z } from 'zod';
import { SubscriberGroupUncheckedCreateNestedManyWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedCreateNestedManyWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    subscriberGroup: z
      .lazy(
        () =>
          SubscriberGroupUncheckedCreateNestedManyWithoutRelationshipInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RelationshipUncheckedCreateInputObjectSchema = Schema;
