import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateInputObjectSchema } from './objects/BenefitPackageCreateInput.schema';
import { BenefitPackageUncheckedCreateInputObjectSchema } from './objects/BenefitPackageUncheckedCreateInput.schema';
import { BenefitPackageUpdateInputObjectSchema } from './objects/BenefitPackageUpdateInput.schema';
import { BenefitPackageUncheckedUpdateInputObjectSchema } from './objects/BenefitPackageUncheckedUpdateInput.schema';

export const BenefitPackageUpsertSchema = z.object({
  where: BenefitPackageWhereUniqueInputObjectSchema,
  create: z.union([
    BenefitPackageCreateInputObjectSchema,
    BenefitPackageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BenefitPackageUpdateInputObjectSchema,
    BenefitPackageUncheckedUpdateInputObjectSchema,
  ]),
});
