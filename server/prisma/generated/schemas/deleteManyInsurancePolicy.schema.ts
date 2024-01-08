import { z } from 'zod';
import { InsurancePolicyWhereInputObjectSchema } from './objects/InsurancePolicyWhereInput.schema';

export const InsurancePolicyDeleteManySchema = z.object({
  where: InsurancePolicyWhereInputObjectSchema.optional(),
});
