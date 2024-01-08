import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyRelationFilter> = z
  .object({
    is: z
      .lazy(() => InsurancePolicyWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => InsurancePolicyWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const InsurancePolicyRelationFilterObjectSchema = Schema;
