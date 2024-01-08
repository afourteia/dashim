import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUpdateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
