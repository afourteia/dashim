import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutSubscriberInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema =
  Schema;
