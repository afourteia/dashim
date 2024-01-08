import { z } from 'zod';
import { FingerTypeWhereInputObjectSchema } from './FingerTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => FingerTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FingerTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FingerTypeRelationFilterObjectSchema = Schema;
