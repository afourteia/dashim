import { z } from 'zod';
import { FingerprintOrderByWithRelationInputObjectSchema } from './objects/FingerprintOrderByWithRelationInput.schema';
import { FingerprintWhereInputObjectSchema } from './objects/FingerprintWhereInput.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';
import { FingerprintScalarFieldEnumSchema } from './enums/FingerprintScalarFieldEnum.schema';

export const FingerprintFindManySchema = z.object({
  orderBy: z
    .union([
      FingerprintOrderByWithRelationInputObjectSchema,
      FingerprintOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FingerprintWhereInputObjectSchema.optional(),
  cursor: FingerprintWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FingerprintScalarFieldEnumSchema).optional(),
});
