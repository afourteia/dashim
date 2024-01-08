import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';

export const BenefitPackageDeleteOneSchema = z.object({
  where: BenefitPackageWhereUniqueInputObjectSchema,
});
