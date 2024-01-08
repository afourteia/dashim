import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './objects/VoiceWhereUniqueInput.schema';
import { VoiceCreateInputObjectSchema } from './objects/VoiceCreateInput.schema';
import { VoiceUncheckedCreateInputObjectSchema } from './objects/VoiceUncheckedCreateInput.schema';
import { VoiceUpdateInputObjectSchema } from './objects/VoiceUpdateInput.schema';
import { VoiceUncheckedUpdateInputObjectSchema } from './objects/VoiceUncheckedUpdateInput.schema';

export const VoiceUpsertSchema = z.object({
  where: VoiceWhereUniqueInputObjectSchema,
  create: z.union([
    VoiceCreateInputObjectSchema,
    VoiceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VoiceUpdateInputObjectSchema,
    VoiceUncheckedUpdateInputObjectSchema,
  ]),
});
