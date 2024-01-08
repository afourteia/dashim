import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';

export const InsurancePolicyFindUniqueSchema = z.object({
  where: InsurancePolicyWhereUniqueInputObjectSchema,
});
