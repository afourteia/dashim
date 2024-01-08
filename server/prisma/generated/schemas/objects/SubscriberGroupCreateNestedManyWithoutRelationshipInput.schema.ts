import { z } from 'zod';
import { SubscriberGroupCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutRelationshipInput.schema';
import { SubscriberGroupCreateOrConnectWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutRelationshipInput.schema';
import { SubscriberGroupCreateManyRelationshipInputEnvelopeObjectSchema } from './SubscriberGroupCreateManyRelationshipInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedManyWithoutRelationshipInput> =
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
      createMany: z
        .lazy(
          () => SubscriberGroupCreateManyRelationshipInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedManyWithoutRelationshipInputObjectSchema =
  Schema;
