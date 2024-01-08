import { z } from 'zod';
import { IDCardCreateManySubscriberGroupInputObjectSchema } from './IDCardCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateManySubscriberGroupInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => IDCardCreateManySubscriberGroupInputObjectSchema),
      z.lazy(() => IDCardCreateManySubscriberGroupInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const IDCardCreateManySubscriberGroupInputEnvelopeObjectSchema = Schema;
