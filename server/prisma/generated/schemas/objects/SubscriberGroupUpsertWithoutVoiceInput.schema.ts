import { z } from 'zod';
import { SubscriberGroupUpdateWithoutVoiceInputObjectSchema } from './SubscriberGroupUpdateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutVoiceInput.schema';
import { SubscriberGroupCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutVoiceInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberGroupUpdateWithoutVoiceInputObjectSchema),
      z.lazy(() => SubscriberGroupUncheckedUpdateWithoutVoiceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubscriberGroupCreateWithoutVoiceInputObjectSchema),
      z.lazy(() => SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema),
    ]),
  })
  .strict();

export const SubscriberGroupUpsertWithoutVoiceInputObjectSchema = Schema;
