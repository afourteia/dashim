import { z } from 'zod';
import { VoiceUpdateInputObjectSchema } from './objects/VoiceUpdateInput.schema';
import { VoiceUncheckedUpdateInputObjectSchema } from './objects/VoiceUncheckedUpdateInput.schema';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';

export const VoiceUpdateOneSchema = z.object({
  data: z.union([
    VoiceUpdateInputObjectSchema,
    VoiceUncheckedUpdateInputObjectSchema,
  ]),
  where: VoiceWhereUniqueInputObjectSchema,
});
