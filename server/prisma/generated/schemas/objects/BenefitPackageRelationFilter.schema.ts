import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageRelationFilter> = z
  .object({
    is: z
      .lazy(() => BenefitPackageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BenefitPackageWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BenefitPackageRelationFilterObjectSchema = Schema;
