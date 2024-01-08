import { z } from 'zod';
import { RelationshipCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedCreateWithoutSubscriberGroupInput.schema';
import { RelationshipCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateOrConnectWithoutSubscriberGroupInput.schema';
import { RelationshipUpsertWithoutSubscriberGroupInputObjectSchema } from './RelationshipUpsertWithoutSubscriberGroupInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';
import { RelationshipUpdateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUpdateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUpdateOneRequiredWithoutSubscriberGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => RelationshipCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z.lazy(
            () =>
              RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            RelationshipCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => RelationshipUpsertWithoutSubscriberGroupInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => RelationshipWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RelationshipUpdateWithoutSubscriberGroupInputObjectSchema,
          ),
          z.lazy(
            () =>
              RelationshipUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RelationshipUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
