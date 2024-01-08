import { z } from 'zod';
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from './objects/InsurancePolicyOrderByWithRelationInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './objects/InsurancePolicyWhereInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyScalarFieldEnumSchema } from './enums/InsurancePolicyScalarFieldEnum.schema';

export const InsurancePolicyFindFirstSchema = z.object({
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
  distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
});
