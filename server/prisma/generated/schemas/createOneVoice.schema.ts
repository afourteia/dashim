import { z } from 'zod';
import { VoiceCreateInputObjectSchema } from './objects/VoiceCreateInput.schema';
import { VoiceUncheckedCreateInputObjectSchema } from './objects/VoiceUncheckedCreateInput.schema';

export const VoiceCreateOneSchema = z.object({
  data: z.union([
    VoiceCreateInputObjectSchema,
    VoiceUncheckedCreateInputObjectSchema,
  ]),
});
