import { z } from 'zod';
import { BenefitPackageUpdateInputObjectSchema } from './objects/BenefitPackageUpdateInput.schema';
import { BenefitPackageUncheckedUpdateInputObjectSchema } from './objects/BenefitPackageUncheckedUpdateInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';

export const BenefitPackageUpdateOneSchema = z.object({
  data: z.union([
    BenefitPackageUpdateInputObjectSchema,
    BenefitPackageUncheckedUpdateInputObjectSchema,
  ]),
  where: BenefitPackageWhereUniqueInputObjectSchema,
});
