import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceUpdateWithoutSubscriberGroupInputObjectSchema } from './VoiceUpdateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => VoiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => VoiceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
