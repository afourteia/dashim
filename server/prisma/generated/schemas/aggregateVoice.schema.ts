import { z } from 'zod';
import { VoiceOrderByWithRelationInputObjectSchema } from './objects/VoiceOrderByWithRelationInput.schema';
import { VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceCountAggregateInputObjectSchema } from './objects/VoiceCountAggregateInput.schema';
import { VoiceMinAggregateInputObjectSchema } from './objects/VoiceMinAggregateInput.schema';
import { VoiceMaxAggregateInputObjectSchema } from './objects/VoiceMaxAggregateInput.schema';

export const VoiceAggregateSchema = z.object({
  orderBy: z
    .union([
      VoiceOrderByWithRelationInputObjectSchema,
      VoiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VoiceWhereInputObjectSchema.optional(),
  cursor: VoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VoiceCountAggregateInputObjectSchema])
    .optional(),
  _min: VoiceMinAggregateInputObjectSchema.optional(),
  _max: VoiceMaxAggregateInputObjectSchema.optional(),
});
