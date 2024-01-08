import { z } from 'zod';
import { FingerTypeWhereInputObjectSchema } from './objects/FingerTypeWhereInput.schema';
import { FingerTypeOrderByWithAggregationInputObjectSchema } from './objects/FingerTypeOrderByWithAggregationInput.schema';
import { FingerTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/FingerTypeScalarWhereWithAggregatesInput.schema';
import { FingerTypeScalarFieldEnumSchema } from './enums/FingerTypeScalarFieldEnum.schema';

export const FingerTypeGroupBySchema = z.object({
  where: FingerTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FingerTypeOrderByWithAggregationInputObjectSchema,
      FingerTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FingerTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FingerTypeScalarFieldEnumSchema),
});
