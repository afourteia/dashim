import { z } from 'zod';
import { GenderOrderByWithRelationInputObjectSchema } from './objects/GenderOrderByWithRelationInput.schema';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';
import { GenderScalarFieldEnumSchema } from './enums/GenderScalarFieldEnum.schema';

export const GenderFindFirstSchema = z.object({
  orderBy: z
    .union([
      GenderOrderByWithRelationInputObjectSchema,
      GenderOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GenderWhereInputObjectSchema.optional(),
  cursor: GenderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GenderScalarFieldEnumSchema).optional(),
});
