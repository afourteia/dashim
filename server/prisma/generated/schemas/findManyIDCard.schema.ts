import { z } from 'zod';
import { IDCardOrderByWithRelationInputObjectSchema } from './objects/IDCardOrderByWithRelationInput.schema';
import { IDCardWhereInputObjectSchema } from './objects/IDCardWhereInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';
import { IDCardScalarFieldEnumSchema } from './enums/IDCardScalarFieldEnum.schema';

export const IDCardFindManySchema = z.object({
  orderBy: z
    .union([
      IDCardOrderByWithRelationInputObjectSchema,
      IDCardOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: IDCardWhereInputObjectSchema.optional(),
  cursor: IDCardWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(IDCardScalarFieldEnumSchema).optional(),
});
