import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './objects/BenefitPackageWhereInput.schema';

export const BenefitPackageDeleteManySchema = z.object({
  where: BenefitPackageWhereInputObjectSchema.optional(),
});
