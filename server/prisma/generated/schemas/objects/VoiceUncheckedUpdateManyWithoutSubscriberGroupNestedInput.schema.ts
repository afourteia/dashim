import { z } from 'zod';
import { VoiceCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateWithoutSubscriberGroupInput.schema';
import { VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './VoiceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { VoiceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './VoiceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { VoiceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './VoiceCreateManySubscriberGroupInputEnvelope.schema';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { VoiceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './VoiceUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { VoiceScalarWhereInputObjectSchema } from './VoiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUncheckedUpdateManyWithoutSubscriberGroupNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VoiceCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => VoiceWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => VoiceWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => VoiceWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              VoiceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => VoiceScalarWhereInputObjectSchema),
          z.lazy(() => VoiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceUncheckedUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
