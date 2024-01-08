import { z } from 'zod';
import { SubscriberGroupCreateNestedManyWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateNestedManyWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipCreateInput> = z
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
          SubscriberGroupCreateNestedManyWithoutRelationshipInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RelationshipCreateInputObjectSchema = Schema;
