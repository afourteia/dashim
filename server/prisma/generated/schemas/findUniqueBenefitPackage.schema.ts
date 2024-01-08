import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';

export const BenefitPackageFindUniqueSchema = z.object({
  where: BenefitPackageWhereUniqueInputObjectSchema,
});
