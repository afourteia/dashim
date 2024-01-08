import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
