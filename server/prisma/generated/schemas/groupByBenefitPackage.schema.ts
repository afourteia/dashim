import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './objects/BenefitPackageWhereInput.schema';
import { BenefitPackageOrderByWithAggregationInputObjectSchema } from './objects/BenefitPackageOrderByWithAggregationInput.schema';
import { BenefitPackageScalarWhereWithAggregatesInputObjectSchema } from './objects/BenefitPackageScalarWhereWithAggregatesInput.schema';
import { BenefitPackageScalarFieldEnumSchema } from './enums/BenefitPackageScalarFieldEnum.schema';

export const BenefitPackageGroupBySchema = z.object({
  where: BenefitPackageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BenefitPackageOrderByWithAggregationInputObjectSchema,
      BenefitPackageOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BenefitPackageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BenefitPackageScalarFieldEnumSchema),
});
