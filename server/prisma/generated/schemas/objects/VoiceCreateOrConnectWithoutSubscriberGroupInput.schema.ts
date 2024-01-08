import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => VoiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
