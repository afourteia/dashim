import { z } from 'zod';
import { SubscriberCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedCreateWithoutSubscriberGroupInput.schema';
import { SubscriberCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateOrConnectWithoutSubscriberGroupInput.schema';
import { SubscriberUpsertWithoutSubscriberGroupInputObjectSchema } from './SubscriberUpsertWithoutSubscriberGroupInput.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateOneRequiredWithoutSubscriberGroupNestedInput> =
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
      upsert: z
        .lazy(() => SubscriberUpsertWithoutSubscriberGroupInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SubscriberWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SubscriberUpdateWithoutSubscriberGroupInputObjectSchema),
          z.lazy(
            () =>
              SubscriberUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
