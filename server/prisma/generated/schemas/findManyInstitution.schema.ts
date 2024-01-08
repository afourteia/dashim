import { z } from 'zod';
import { InstitutionOrderByWithRelationInputObjectSchema } from './objects/InstitutionOrderByWithRelationInput.schema';
import { InstitutionWhereInputObjectSchema } from './objects/InstitutionWhereInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';
import { InstitutionScalarFieldEnumSchema } from './enums/InstitutionScalarFieldEnum.schema';

export const InstitutionFindManySchema = z.object({
  orderBy: z
    .union([
      InstitutionOrderByWithRelationInputObjectSchema,
      InstitutionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InstitutionWhereInputObjectSchema.optional(),
  cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InstitutionScalarFieldEnumSchema).optional(),
});
