import { z } from 'zod';
import { SubscriberGroupUpdateWithoutFaceInputObjectSchema } from './SubscriberGroupUpdateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutFaceInput.schema';
import { SubscriberGroupCreateWithoutFaceInputObjectSchema } from './SubscriberGroupCreateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutFaceInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriberGroupUpdateWithoutFaceInputObjectSchema),
      z.lazy(() => SubscriberGroupUncheckedUpdateWithoutFaceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubscriberGroupCreateWithoutFaceInputObjectSchema),
      z.lazy(() => SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema),
    ]),
  })
  .strict();

export const SubscriberGroupUpsertWithoutFaceInputObjectSchema = Schema;
