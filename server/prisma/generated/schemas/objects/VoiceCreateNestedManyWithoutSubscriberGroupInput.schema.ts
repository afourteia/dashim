import { z } from 'zod';
import { VoiceCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { VoiceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { VoiceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './VoiceCreateManySubscriberGroupInputEnvelope.schema';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateNestedManyWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceCreateWithoutSubscriberGroupInputObjectSchema),
          z
            .lazy(() => VoiceCreateWithoutSubscriberGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => VoiceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => VoiceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VoiceCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
