import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutVoiceInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutVoiceInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutVoiceInputObjectSchema =
  Schema;
