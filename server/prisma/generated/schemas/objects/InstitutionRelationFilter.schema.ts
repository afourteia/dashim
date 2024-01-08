import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionRelationFilter> = z
  .object({
    is: z
      .lazy(() => InstitutionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => InstitutionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const InstitutionRelationFilterObjectSchema = Schema;
