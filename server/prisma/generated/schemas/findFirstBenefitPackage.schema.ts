import { z } from 'zod';
import { BenefitPackageOrderByWithRelationInputObjectSchema } from './objects/BenefitPackageOrderByWithRelationInput.schema';
import { BenefitPackageWhereInputObjectSchema } from './objects/BenefitPackageWhereInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './objects/BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageScalarFieldEnumSchema } from './enums/BenefitPackageScalarFieldEnum.schema';

export const BenefitPackageFindFirstSchema = z.object({
  orderBy: z
    .union([
      BenefitPackageOrderByWithRelationInputObjectSchema,
      BenefitPackageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BenefitPackageWhereInputObjectSchema.optional(),
  cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
});
