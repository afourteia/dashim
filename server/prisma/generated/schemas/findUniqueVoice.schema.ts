import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';

export const VoiceFindUniqueSchema = z.object({
  where: VoiceWhereUniqueInputObjectSchema,
});
