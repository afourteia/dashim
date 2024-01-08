import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupCreateWithoutRelationshipInput.schema';
import { SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutRelationshipInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutRelationshipInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutRelationshipInputObjectSchema =
  Schema;
