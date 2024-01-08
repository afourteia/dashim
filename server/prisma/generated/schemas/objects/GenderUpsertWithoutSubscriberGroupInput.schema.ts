import { z } from 'zod';
import { GenderUpdateWithoutSubscriberGroupInputObjectSchema } from './GenderUpdateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { GenderCreateWithoutSubscriberGroupInputObjectSchema } from './GenderCreateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpsertWithoutSubscriberGroupInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderUpdateWithoutSubscriberGroupInputObjectSchema),
      z.lazy(
        () => GenderUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => GenderCreateWithoutSubscriberGroupInputObjectSchema),
      z.lazy(
        () => GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const GenderUpsertWithoutSubscriberGroupInputObjectSchema = Schema;
