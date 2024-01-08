import { z } from 'zod';
import { SubscriberGroupCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutVoiceInput.schema';
import { SubscriberGroupCreateOrConnectWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutVoiceInput.schema';
import { SubscriberGroupUpsertWithoutVoiceInputObjectSchema } from './SubscriberGroupUpsertWithoutVoiceInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutVoiceInputObjectSchema } from './SubscriberGroupUpdateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutVoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutVoiceInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubscriberGroupCreateOrConnectWithoutVoiceInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutVoiceInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => SubscriberGroupUpdateWithoutVoiceInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedUpdateWithoutVoiceInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutVoiceNestedInputObjectSchema =
  Schema;
