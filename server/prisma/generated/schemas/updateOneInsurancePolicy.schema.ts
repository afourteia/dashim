import { z } from 'zod';
import { InsurancePolicyUpdateInputObjectSchema } from './objects/InsurancePolicyUpdateInput.schema';
import { InsurancePolicyUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyUncheckedUpdateInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';

export const InsurancePolicyUpdateOneSchema = z.object({
  data: z.union([
    InsurancePolicyUpdateInputObjectSchema,
    InsurancePolicyUncheckedUpdateInputObjectSchema,
  ]),
  where: InsurancePolicyWhereUniqueInputObjectSchema,
});
