import { z } from 'zod';
import { InsurancePolicyCreateInputObjectSchema } from './objects/InsurancePolicyCreateInput.schema';
import { InsurancePolicyUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyUncheckedCreateInput.schema';

export const InsurancePolicyCreateOneSchema = z.object({
  data: z.union([
    InsurancePolicyCreateInputObjectSchema,
    InsurancePolicyUncheckedCreateInputObjectSchema,
  ]),
});
