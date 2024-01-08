import { z } from 'zod';
import { IDCardOrderByWithRelationInputObjectSchema } from './objects/IDCardOrderByWithRelationInput.schema';
import { IDCardWhereInputObjectSchema } from './objects/IDCardWhereInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';
import { IDCardCountAggregateInputObjectSchema } from './objects/IDCardCountAggregateInput.schema';
import { IDCardMinAggregateInputObjectSchema } from './objects/IDCardMinAggregateInput.schema';
import { IDCardMaxAggregateInputObjectSchema } from './objects/IDCardMaxAggregateInput.schema';

export const IDCardAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), IDCardCountAggregateInputObjectSchema])
    .optional(),
  _min: IDCardMinAggregateInputObjectSchema.optional(),
  _max: IDCardMaxAggregateInputObjectSchema.optional(),
});
