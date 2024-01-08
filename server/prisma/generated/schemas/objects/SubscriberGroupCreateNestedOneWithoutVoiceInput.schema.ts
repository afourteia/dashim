import { z } from 'zod';
import { SubscriberGroupCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateWithoutVoiceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutVoiceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutVoiceInput.schema';
import { SubscriberGroupCreateOrConnectWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutVoiceInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutVoiceInput> =
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
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutVoiceInputObjectSchema =
  Schema;
