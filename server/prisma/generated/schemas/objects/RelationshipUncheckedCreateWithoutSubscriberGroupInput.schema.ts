import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUncheckedCreateWithoutSubscriberGroupInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      arabic: z.string().optional().nullable(),
      english: z.string().optional().nullable(),
    })
    .strict();

export const RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema =
  Schema;
