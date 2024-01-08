import { z } from 'zod';
import { SubscriberCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedCreateWithoutSubscriberGroupInput.schema';
import { SubscriberCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateOrConnectWithoutSubscriberGroupInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedOneWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutSubscriberGroupInputObjectSchema),
          z.lazy(
            () =>
              SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            SubscriberCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SubscriberCreateNestedOneWithoutSubscriberGroupInputObjectSchema =
  Schema;
