import { z } from 'zod';
import { VoiceScalarWhereInputObjectSchema } from './VoiceScalarWhereInput.schema';
import { VoiceUpdateManyMutationInputObjectSchema } from './VoiceUpdateManyMutationInput.schema';
import { VoiceUncheckedUpdateManyWithoutVoiceInputObjectSchema } from './VoiceUncheckedUpdateManyWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUpdateManyWithWhereWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => VoiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceUpdateManyMutationInputObjectSchema),
        z.lazy(() => VoiceUncheckedUpdateManyWithoutVoiceInputObjectSchema),
      ]),
    })
    .strict();

export const VoiceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema =
  Schema;
