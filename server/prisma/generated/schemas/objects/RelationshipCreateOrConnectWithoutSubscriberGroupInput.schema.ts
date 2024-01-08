import { z } from 'zod';
import { RelationshipWhereUniqueInputObjectSchema } from './RelationshipWhereUniqueInput.schema';
import { RelationshipCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => RelationshipWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RelationshipCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RelationshipCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
