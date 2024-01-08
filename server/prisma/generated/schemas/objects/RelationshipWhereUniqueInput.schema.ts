import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const RelationshipWhereUniqueInputObjectSchema = Schema;
