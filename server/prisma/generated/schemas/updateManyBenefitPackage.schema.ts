import { z } from 'zod';
import { BenefitPackageUpdateManyMutationInputObjectSchema } from './objects/BenefitPackageUpdateManyMutationInput.schema';
import { BenefitPackageWhereInputObjectSchema } from './objects/BenefitPackageWhereInput.schema';

export const BenefitPackageUpdateManySchema = z.object({
  data: BenefitPackageUpdateManyMutationInputObjectSchema,
  where: BenefitPackageWhereInputObjectSchema.optional(),
});
