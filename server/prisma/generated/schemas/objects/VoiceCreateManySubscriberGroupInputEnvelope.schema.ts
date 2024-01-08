import { z } from 'zod';
import { VoiceCreateManySubscriberGroupInputObjectSchema } from './VoiceCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateManySubscriberGroupInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VoiceCreateManySubscriberGroupInputObjectSchema),
      z.lazy(() => VoiceCreateManySubscriberGroupInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const VoiceCreateManySubscriberGroupInputEnvelopeObjectSchema = Schema;
