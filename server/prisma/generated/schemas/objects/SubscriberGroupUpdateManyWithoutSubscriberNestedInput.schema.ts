import { z } from 'zod';
import { SubscriberGroupCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSubscriberInput.schema';
import { SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutSubscriberInput.schema';
import { SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema } from './SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInput.schema';
import { SubscriberGroupCreateManySubscriberInputEnvelopeObjectSchema } from './SubscriberGroupCreateManySubscriberInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema } from './SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInput.schema';
import { SubscriberGroupUpdateManyWithWhereWithoutSubscriberInputObjectSchema } from './SubscriberGroupUpdateManyWithWhereWithoutSubscriberInput.schema';
import { SubscriberGroupScalarWhereInputObjectSchema } from './SubscriberGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateManyWithoutSubscriberNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema),
          z
            .lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => SubscriberGroupCreateManySubscriberInputEnvelopeObjectSchema,
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
              SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
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

export const SubscriberGroupUpdateManyWithoutSubscriberNestedInputObjectSchema =
  Schema;
