import { z } from 'zod';
import { GenderOrderByWithRelationInputObjectSchema } from './objects/GenderOrderByWithRelationInput.schema';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';
import { GenderCountAggregateInputObjectSchema } from './objects/GenderCountAggregateInput.schema';
import { GenderMinAggregateInputObjectSchema } from './objects/GenderMinAggregateInput.schema';
import { GenderMaxAggregateInputObjectSchema } from './objects/GenderMaxAggregateInput.schema';

export const GenderAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), GenderCountAggregateInputObjectSchema])
    .optional(),
  _min: GenderMinAggregateInputObjectSchema.optional(),
  _max: GenderMaxAggregateInputObjectSchema.optional(),
});
