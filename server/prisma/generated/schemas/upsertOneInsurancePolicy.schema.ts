import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './objects/InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateInputObjectSchema } from './objects/InsurancePolicyCreateInput.schema';
import { InsurancePolicyUncheckedCreateInputObjectSchema } from './objects/InsurancePolicyUncheckedCreateInput.schema';
import { InsurancePolicyUpdateInputObjectSchema } from './objects/InsurancePolicyUpdateInput.schema';
import { InsurancePolicyUncheckedUpdateInputObjectSchema } from './objects/InsurancePolicyUncheckedUpdateInput.schema';

export const InsurancePolicyUpsertSchema = z.object({
  where: InsurancePolicyWhereUniqueInputObjectSchema,
  create: z.union([
    InsurancePolicyCreateInputObjectSchema,
    InsurancePolicyUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InsurancePolicyUpdateInputObjectSchema,
    InsurancePolicyUncheckedUpdateInputObjectSchema,
  ]),
});
