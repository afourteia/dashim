import { z } from 'zod';
import { InsurancePolicyCreateManyInputObjectSchema } from './objects/InsurancePolicyCreateManyInput.schema';

export const InsurancePolicyCreateManySchema = z.object({
  data: z.union([
    InsurancePolicyCreateManyInputObjectSchema,
    z.array(InsurancePolicyCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
