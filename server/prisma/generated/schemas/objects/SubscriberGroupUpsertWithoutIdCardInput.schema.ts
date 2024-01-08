import { z } from 'zod';
import { SubscriberGroupUpdateWithoutIdCardInputObjectSchema } from './SubscriberGroupUpdateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutIdCardInput.schema';
import { SubscriberGroupCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutIdCardInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberGroupUpdateWithoutIdCardInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedUpdateWithoutIdCardInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SubscriberGroupCreateWithoutIdCardInputObjectSchema),
      z.lazy(
        () => SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SubscriberGroupUpsertWithoutIdCardInputObjectSchema = Schema;
