import { z } from 'zod';
import { FingerTypeOrderByWithRelationInputObjectSchema } from './objects/FingerTypeOrderByWithRelationInput.schema';
import { FingerTypeWhereInputObjectSchema } from './objects/FingerTypeWhereInput.schema';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';
import { FingerTypeCountAggregateInputObjectSchema } from './objects/FingerTypeCountAggregateInput.schema';
import { FingerTypeMinAggregateInputObjectSchema } from './objects/FingerTypeMinAggregateInput.schema';
import { FingerTypeMaxAggregateInputObjectSchema } from './objects/FingerTypeMaxAggregateInput.schema';

export const FingerTypeAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), FingerTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: FingerTypeMinAggregateInputObjectSchema.optional(),
  _max: FingerTypeMaxAggregateInputObjectSchema.optional(),
});
