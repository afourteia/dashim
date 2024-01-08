import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './InsurancePolicyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyListRelationFilter> = z
  .object({
    every: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    some: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
    none: z.lazy(() => InsurancePolicyWhereInputObjectSchema).optional(),
  })
  .strict();

export const InsurancePolicyListRelationFilterObjectSchema = Schema;
