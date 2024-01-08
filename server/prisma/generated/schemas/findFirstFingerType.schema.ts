import { z } from 'zod';
import { FingerTypeOrderByWithRelationInputObjectSchema } from './objects/FingerTypeOrderByWithRelationInput.schema';
import { FingerTypeWhereInputObjectSchema } from './objects/FingerTypeWhereInput.schema';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';
import { FingerTypeScalarFieldEnumSchema } from './enums/FingerTypeScalarFieldEnum.schema';

export const FingerTypeFindFirstSchema = z.object({
  orderBy: z
    .union([
      FingerTypeOrderByWithRelationInputObjectSchema,
      FingerTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FingerTypeWhereInputObjectSchema.optional(),
  cursor: FingerTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FingerTypeScalarFieldEnumSchema).optional(),
});
