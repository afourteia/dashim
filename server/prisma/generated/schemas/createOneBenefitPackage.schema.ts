import { z } from 'zod';
import { BenefitPackageCreateInputObjectSchema } from './objects/BenefitPackageCreateInput.schema';
import { BenefitPackageUncheckedCreateInputObjectSchema } from './objects/BenefitPackageUncheckedCreateInput.schema';

export const BenefitPackageCreateOneSchema = z.object({
  data: z.union([
    BenefitPackageCreateInputObjectSchema,
    BenefitPackageUncheckedCreateInputObjectSchema,
  ]),
});
