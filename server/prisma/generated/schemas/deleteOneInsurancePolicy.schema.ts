import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';

export const InsurancePolicyDeleteOneSchema = z.object({
  where: InsurancePolicyWhereUniqueInputObjectSchema,
});
