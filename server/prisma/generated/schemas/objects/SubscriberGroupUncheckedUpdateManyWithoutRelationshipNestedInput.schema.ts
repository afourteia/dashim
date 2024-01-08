import { z } from 'zod';
import { SubscriberGroupCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutRelationshipInput.schema';
import { SubscriberGroupCreateOrConnectWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutRelationshipInput.schema';
import { SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema } from './SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInput.schema';
import { SubscriberGroupCreateManyRelationshipInputEnvelopeObjectSchema } from './SubscriberGroupCreateManyRelationshipInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema } from './SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInput.schema';
import { SubscriberGroupUpdateManyWithWhereWithoutRelationshipInputObjectSchema } from './SubscriberGroupUpdateManyWithWhereWithoutRelationshipInput.schema';
import { SubscriberGroupScalarWhereInputObjectSchema } from './SubscriberGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUncheckedUpdateManyWithoutRelationshipNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => SubscriberGroupCreateWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberGroupCreateWithoutRelationshipInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupCreateOrConnectWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupCreateOrConnectWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => SubscriberGroupCreateManyRelationshipInputEnvelopeObjectSchema,
        )
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
              SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpdateManyWithWhereWithoutRelationshipInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateManyWithWhereWithoutRelationshipInputObjectSchema,
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

export const SubscriberGroupUncheckedUpdateManyWithoutRelationshipNestedInputObjectSchema =
  Schema;
