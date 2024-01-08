import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    insurancePolicyId: z.string().optional(),
  })
  .strict();

export const BenefitPackageWhereUniqueInputObjectSchema = Schema;
