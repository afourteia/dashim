import { z } from 'zod';
import { SubscriberGroupScalarWhereInputObjectSchema } from './SubscriberGroupScalarWhereInput.schema';
import { SubscriberGroupUpdateManyMutationInputObjectSchema } from './SubscriberGroupUpdateManyMutationInput.schema';
import { SubscriberGroupUncheckedUpdateManyWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupUncheckedUpdateManyWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateManyWithWhereWithoutRelationshipInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberGroupUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateManyWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpdateManyWithWhereWithoutRelationshipInputObjectSchema =
  Schema;
