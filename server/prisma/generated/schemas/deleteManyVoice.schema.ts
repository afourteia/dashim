import { z } from 'zod';
import { VoiceWhereInputObjectSchema } from './objects/VoiceWhereInput.schema';

export const VoiceDeleteManySchema = z.object({
  where: VoiceWhereInputObjectSchema.optional(),
});
