import { z } from 'zod';
import { SubscriberUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { SubscriberCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberCreateWithoutSubscriberGroupInput.schema';
import { SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithoutSubscriberGroupInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberUpdateWithoutSubscriberGroupInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberCreateWithoutSubscriberGroupInputObjectSchema),
      z.lazy(
        () => SubscriberUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberUpsertWithoutSubscriberGroupInputObjectSchema = Schema;
