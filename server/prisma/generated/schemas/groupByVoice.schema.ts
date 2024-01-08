import { z } from 'zod';
import { VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceOrderByWithAggregationInputObjectSchema } from './objects/VoiceOrderByWithAggregationInput.schema';
import { VoiceScalarWhereWithAggregatesInputObjectSchema } from './objects/VoiceScalarWhereWithAggregatesInput.schema';
import { VoiceScalarFieldEnumSchema } from './enums/VoiceScalarFieldEnum.schema';

export const VoiceGroupBySchema = z.object({
  where: VoiceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VoiceOrderByWithAggregationInputObjectSchema,
      VoiceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VoiceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VoiceScalarFieldEnumSchema),
});
