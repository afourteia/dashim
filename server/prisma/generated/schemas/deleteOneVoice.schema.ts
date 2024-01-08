import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';

export const VoiceDeleteOneSchema = z.object({
  where: VoiceWhereUniqueInputObjectSchema,
});
