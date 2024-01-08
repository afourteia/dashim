import { z } from 'zod';
import { RelationshipOrderByWithRelationInputObjectSchema } from './objects/RelationshipOrderByWithRelationInput.schema';
import { RelationshipWhereInputObjectSchema } from './objects/RelationshipWhereInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';
import { RelationshipCountAggregateInputObjectSchema } from './objects/RelationshipCountAggregateInput.schema';
import { RelationshipMinAggregateInputObjectSchema } from './objects/RelationshipMinAggregateInput.schema';
import { RelationshipMaxAggregateInputObjectSchema } from './objects/RelationshipMaxAggregateInput.schema';

export const RelationshipAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), RelationshipCountAggregateInputObjectSchema])
    .optional(),
  _min: RelationshipMinAggregateInputObjectSchema.optional(),
  _max: RelationshipMaxAggregateInputObjectSchema.optional(),
});
