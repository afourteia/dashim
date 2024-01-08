import { z } from 'zod';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';
import { GenderOrderByWithAggregationInputObjectSchema } from './objects/GenderOrderByWithAggregationInput.schema';
import { GenderScalarWhereWithAggregatesInputObjectSchema } from './objects/GenderScalarWhereWithAggregatesInput.schema';
import { GenderScalarFieldEnumSchema } from './enums/GenderScalarFieldEnum.schema';

export const GenderGroupBySchema = z.object({
  where: GenderWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GenderOrderByWithAggregationInputObjectSchema,
      GenderOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GenderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GenderScalarFieldEnumSchema),
});
