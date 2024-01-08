import { z } from 'zod';
import { VoiceUpdateManyMutationInputObjectSchema } from './objects/VoiceUpdateManyMutationInput.schema';
import { VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';

export const VoiceUpdateManySchema = z.object({
  data: VoiceUpdateManyMutationInputObjectSchema,
  where: VoiceWhereInputObjectSchema.optional(),
});
