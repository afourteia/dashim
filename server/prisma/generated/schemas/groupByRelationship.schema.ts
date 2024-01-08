import { z } from 'zod';
import { RelationshipWhereInputObjectSchema } from './objects/RelationshipWhereInput.schema';
import { RelationshipOrderByWithAggregationInputObjectSchema } from './objects/RelationshipOrderByWithAggregationInput.schema';
import { RelationshipScalarWhereWithAggregatesInputObjectSchema } from './objects/RelationshipScalarWhereWithAggregatesInput.schema';
import { RelationshipScalarFieldEnumSchema } from './enums/RelationshipScalarFieldEnum.schema';

export const RelationshipGroupBySchema = z.object({
  where: RelationshipWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RelationshipOrderByWithAggregationInputObjectSchema,
      RelationshipOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RelationshipScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RelationshipScalarFieldEnumSchema),
});
