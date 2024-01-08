import { z } from 'zod';
import { SubscriberGroupCreateManyGenderInputObjectSchema } from './SubscriberGroupCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateManyGenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SubscriberGroupCreateManyGenderInputObjectSchema),
      z.lazy(() => SubscriberGroupCreateManyGenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SubscriberGroupCreateManyGenderInputEnvelopeObjectSchema = Schema;
