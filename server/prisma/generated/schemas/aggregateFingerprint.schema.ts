import { z } from 'zod';
import { FingerprintOrderByWithRelationInputObjectSchema } from './objects/FingerprintOrderByWithRelationInput.schema';
import { FingerprintWhereInputObjectSchema } from './objects/FingerprintWhereInput.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';
import { FingerprintCountAggregateInputObjectSchema } from './objects/FingerprintCountAggregateInput.schema';
import { FingerprintMinAggregateInputObjectSchema } from './objects/FingerprintMinAggregateInput.schema';
import { FingerprintMaxAggregateInputObjectSchema } from './objects/FingerprintMaxAggregateInput.schema';

export const FingerprintAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), FingerprintCountAggregateInputObjectSchema])
    .optional(),
  _min: FingerprintMinAggregateInputObjectSchema.optional(),
  _max: FingerprintMaxAggregateInputObjectSchema.optional(),
});
