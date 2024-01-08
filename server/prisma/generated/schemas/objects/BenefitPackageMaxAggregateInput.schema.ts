import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    name: z.literal(true).optional(),
    insurancePolicyId: z.literal(true).optional(),
  })
  .strict();

export const BenefitPackageMaxAggregateInputObjectSchema = Schema;
