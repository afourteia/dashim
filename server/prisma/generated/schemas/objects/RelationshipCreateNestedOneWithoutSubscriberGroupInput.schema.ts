import { z } from 'zod';
import { RelationshipCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedCreateWithoutSubscriberGroupInput.schema';
import { RelationshipCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateOrConnectWithoutSubscriberGroupInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipCreateNestedOneWithoutSubscriberGroupInput> =
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
      connect: z
        .lazy(() => RelationshipWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const RelationshipCreateNestedOneWithoutSubscriberGroupInputObjectSchema =
  Schema;
