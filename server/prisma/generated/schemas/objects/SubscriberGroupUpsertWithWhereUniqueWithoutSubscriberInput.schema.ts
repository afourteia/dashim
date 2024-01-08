import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUpdateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutSubscriberInput.schema';
import { SubscriberGroupCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateWithoutSubscriberInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema =
  Schema;
