import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUpdateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpdateWithWhereUniqueWithoutRelationshipInputObjectSchema =
  Schema;
