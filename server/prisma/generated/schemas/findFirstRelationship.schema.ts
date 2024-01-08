import { z } from 'zod';
import { RelationshipOrderByWithRelationInputObjectSchema } from './objects/RelationshipOrderByWithRelationInput.schema';
import { RelationshipWhereInputObjectSchema } from './objects/RelationshipWhereInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';
import { RelationshipScalarFieldEnumSchema } from './enums/RelationshipScalarFieldEnum.schema';

export const RelationshipFindFirstSchema = z.object({
  orderBy: z
    .union([
      RelationshipOrderByWithRelationInputObjectSchema,
      RelationshipOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RelationshipWhereInputObjectSchema.optional(),
  cursor: RelationshipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RelationshipScalarFieldEnumSchema).optional(),
});
