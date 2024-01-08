import { z } from 'zod';
import { FingerprintWhereInputObjectSchema } from './objects/FingerprintWhereInput.schema';
import { FingerprintOrderByWithAggregationInputObjectSchema } from './objects/FingerprintOrderByWithAggregationInput.schema';
import { FingerprintScalarWhereWithAggregatesInputObjectSchema } from './objects/FingerprintScalarWhereWithAggregatesInput.schema';
import { FingerprintScalarFieldEnumSchema } from './enums/FingerprintScalarFieldEnum.schema';

export const FingerprintGroupBySchema = z.object({
  where: FingerprintWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FingerprintOrderByWithAggregationInputObjectSchema,
      FingerprintOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FingerprintScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FingerprintScalarFieldEnumSchema),
});
