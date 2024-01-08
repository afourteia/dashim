import { z } from 'zod';
import { FaceWhereInputObjectSchema } from './objects/FaceWhereInput.schema';
import { FaceOrderByWithAggregationInputObjectSchema } from './objects/FaceOrderByWithAggregationInput.schema';
import { FaceScalarWhereWithAggregatesInputObjectSchema } from './objects/FaceScalarWhereWithAggregatesInput.schema';
import { FaceScalarFieldEnumSchema } from './enums/FaceScalarFieldEnum.schema';

export const FaceGroupBySchema = z.object({
  where: FaceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FaceOrderByWithAggregationInputObjectSchema,
      FaceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FaceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FaceScalarFieldEnumSchema),
});
