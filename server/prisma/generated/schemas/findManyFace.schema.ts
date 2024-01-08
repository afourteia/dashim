import { z } from 'zod';
import { FaceOrderByWithRelationInputObjectSchema } from './objects/FaceOrderByWithRelationInput.schema';
import { FaceWhereInputObjectSchema } from './objects/FaceWhereInput.schema';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';
import { FaceScalarFieldEnumSchema } from './enums/FaceScalarFieldEnum.schema';

export const FaceFindManySchema = z.object({
  orderBy: z
    .union([
      FaceOrderByWithRelationInputObjectSchema,
      FaceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FaceWhereInputObjectSchema.optional(),
  cursor: FaceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FaceScalarFieldEnumSchema).optional(),
});
