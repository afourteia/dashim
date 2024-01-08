import { z } from 'zod';
import { FaceOrderByWithRelationInputObjectSchema } from './objects/FaceOrderByWithRelationInput.schema';
import { FaceWhereInputObjectSchema } from './objects/FaceWhereInput.schema';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';
import { FaceCountAggregateInputObjectSchema } from './objects/FaceCountAggregateInput.schema';
import { FaceMinAggregateInputObjectSchema } from './objects/FaceMinAggregateInput.schema';
import { FaceMaxAggregateInputObjectSchema } from './objects/FaceMaxAggregateInput.schema';

export const FaceAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), FaceCountAggregateInputObjectSchema])
    .optional(),
  _min: FaceMinAggregateInputObjectSchema.optional(),
  _max: FaceMaxAggregateInputObjectSchema.optional(),
});
