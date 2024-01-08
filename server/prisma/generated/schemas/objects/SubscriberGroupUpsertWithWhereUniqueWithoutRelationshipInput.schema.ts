import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUpdateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutRelationshipInput.schema';
import { SubscriberGroupCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateWithoutRelationshipInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpsertWithWhereUniqueWithoutRelationshipInputObjectSchema =
  Schema;
