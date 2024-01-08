import { z } from 'zod';
import { RelationshipWhereInputObjectSchema } from './RelationshipWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipRelationFilter> = z
  .object({
    is: z
      .lazy(() => RelationshipWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RelationshipWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RelationshipRelationFilterObjectSchema = Schema;
