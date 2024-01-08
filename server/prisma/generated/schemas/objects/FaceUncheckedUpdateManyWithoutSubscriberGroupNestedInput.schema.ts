import { z } from 'zod';
import { FaceCreateWithoutSubscriberGroupInputObjectSchema } from './FaceCreateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './FaceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { FaceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './FaceUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { FaceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './FaceCreateManySubscriberGroupInputEnvelope.schema';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './FaceUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { FaceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './FaceUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { FaceScalarWhereInputObjectSchema } from './FaceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUncheckedUpdateManyWithoutSubscriberGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema),
          z
            .lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FaceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FaceCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FaceWhereUniqueInputObjectSchema),
          z.lazy(() => FaceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FaceWhereUniqueInputObjectSchema),
          z.lazy(() => FaceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FaceWhereUniqueInputObjectSchema),
          z.lazy(() => FaceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FaceWhereUniqueInputObjectSchema),
          z.lazy(() => FaceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FaceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FaceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FaceScalarWhereInputObjectSchema),
          z.lazy(() => FaceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FaceUncheckedUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
