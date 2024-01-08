import { z } from 'zod';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyOrderByWithRelationInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './objects/InsurancePolicyWhereInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCountAggregateInputObjectSchema } from './objects/InsurancePolicyCountAggregateInput.schema';
import { InsurancePolicyMinAggregateInputObjectSchema } from './objects/InsurancePolicyMinAggregateInput.schema';
import { InsurancePolicyMaxAggregateInputObjectSchema } from './objects/InsurancePolicyMaxAggregateInput.schema';

export const InsurancePolicyAggregateSchema = z.object({
  orderBy: z
    .union([
      InsurancePolicyOrderByWithRelationInputObjectSchema,
      InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InsurancePolicyWhereInputObjectSchema.optional(),
  cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), InsurancePolicyCountAggregateInputObjectSchema])
    .optional(),
  _min: InsurancePolicyMinAggregateInputObjectSchema.optional(),
  _max: InsurancePolicyMaxAggregateInputObjectSchema.optional(),
});
