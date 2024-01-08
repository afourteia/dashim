import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceUpdateWithoutSubscriberGroupInputObjectSchema } from './VoiceUpdateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { VoiceCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => VoiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VoiceUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => VoiceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => VoiceCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
