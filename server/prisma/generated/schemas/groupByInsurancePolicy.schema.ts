import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './objects/InsurancePolicyWhereInput.schema';
import { InsurancePolicyOrderByWithAggregationInputObjectSchema } from './objects/InsurancePolicyOrderByWithAggregationInput.schema';
import { InsurancePolicyScalarWhereWithAggregatesInputObjectSchema } from './objects/InsurancePolicyScalarWhereWithAggregatesInput.schema';
import { InsurancePolicyScalarFieldEnumSchema } from './enums/InsurancePolicyScalarFieldEnum.schema';

export const InsurancePolicyGroupBySchema = z.object({
  where: InsurancePolicyWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InsurancePolicyOrderByWithAggregationInputObjectSchema,
      InsurancePolicyOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: InsurancePolicyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InsurancePolicyScalarFieldEnumSchema),
});
