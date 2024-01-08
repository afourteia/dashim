import { z } from 'zod';
import { BenefitPackageCreateManyInputObjectSchema } from './objects/BenefitPackageCreateManyInput.schema';

export const BenefitPackageCreateManySchema = z.object({
  data: z.union([
    BenefitPackageCreateManyInputObjectSchema,
    z.array(BenefitPackageCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
