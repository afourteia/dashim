import { z } from 'zod';
import { VoiceCreateManyInputObjectSchema } from './objects/VoiceCreateManyInput.schema';

export const VoiceCreateManySchema = z.object({
  data: z.union([
    VoiceCreateManyInputObjectSchema,
    z.array(VoiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
