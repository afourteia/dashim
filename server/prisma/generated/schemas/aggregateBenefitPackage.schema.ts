import { z } from 'zod';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './objects/BenefitPackageOrderByWithRelationInput.schema';
import { BenefitPackageWhereInputObjectSchema } from './objects/BenefitPackageWhereInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCountAggregateInputObjectSchema } from './objects/BenefitPackageCountAggregateInput.schema';
import { BenefitPackageMinAggregateInputObjectSchema } from './objects/BenefitPackageMinAggregateInput.schema';
import { BenefitPackageMaxAggregateInputObjectSchema } from './objects/BenefitPackageMaxAggregateInput.schema';

export const BenefitPackageAggregateSchema = z.object({
  orderBy: z
    .union([
      BenefitPackageOrderByWithRelationInputObjectSchema,
      BenefitPackageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BenefitPackageWhereInputObjectSchema.optional(),
  cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BenefitPackageCountAggregateInputObjectSchema])
    .optional(),
  _min: BenefitPackageMinAggregateInputObjectSchema.optional(),
  _max: BenefitPackageMaxAggregateInputObjectSchema.optional(),
});
