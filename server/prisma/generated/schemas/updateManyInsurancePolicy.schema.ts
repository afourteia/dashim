import { z } from 'zod';
import { InsurancePolicyUpdateManyMutationInputObjectSchema } from './objects/InsurancePolicyUpdateManyMutationInput.schema';
import { InsurancePolicyWhereInputObjectSchema } from './objects/InsurancePolicyWhereInput.schema';

export const InsurancePolicyUpdateManySchema = z.object({
  data: InsurancePolicyUpdateManyMutationInputObjectSchema,
  where: InsurancePolicyWhereInputObjectSchema.optional(),
});
