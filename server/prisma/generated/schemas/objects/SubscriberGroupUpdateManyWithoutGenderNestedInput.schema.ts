import { z } from 'zod';
import { SubscriberGroupCreateWithoutGenderInputObjectSchema } from './SubscriberGroupCreateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutGenderInput.schema';
import { SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutGenderInput.schema';
import { SubscriberGroupUpsertWithWhereUniqueWithoutGenderInputObjectSchema } from './SubscriberGroupUpsertWithWhereUniqueWithoutGenderInput.schema';
import { SubscriberGroupCreateManyGenderInputEnvelopeObjectSchema } from './SubscriberGroupCreateManyGenderInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithWhereUniqueWithoutGenderInputObjectSchema } from './SubscriberGroupUpdateWithWhereUniqueWithoutGenderInput.schema';
import { SubscriberGroupUpdateManyWithWhereWithoutGenderInputObjectSchema } from './SubscriberGroupUpdateManyWithWhereWithoutGenderInput.schema';
import { SubscriberGroupScalarWhereInputObjectSchema } from './SubscriberGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateManyWithoutGenderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema),
          z
            .lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpsertWithWhereUniqueWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberGroupCreateManyGenderInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateWithWhereUniqueWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpdateManyWithWhereWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateManyWithWhereWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriberGroupScalarWhereInputObjectSchema),
          z.lazy(() => SubscriberGroupScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateManyWithoutGenderNestedInputObjectSchema =
  Schema;
