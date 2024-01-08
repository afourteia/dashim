import { z } from 'zod';
import { VoiceOrderByWithRelationInputObjectSchema } from './objects/VoiceOrderByWithRelationInput.schema';
import { VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceScalarFieldEnumSchema } from './enums/VoiceScalarFieldEnum.schema';

export const VoiceFindFirstSchema = z.object({
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
  distinct: z.array(VoiceScalarFieldEnumSchema).optional(),
});
