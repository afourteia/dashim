import { z } from 'zod';
import { RelationshipUpdateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUpdateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { RelationshipCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipCreateWithoutSubscriberGroupInput.schema';
import { RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './RelationshipUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipUpsertWithoutSubscriberGroupInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => RelationshipUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            RelationshipUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RelationshipCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            RelationshipUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RelationshipUpsertWithoutSubscriberGroupInputObjectSchema = Schema;
