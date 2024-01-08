import { z } from 'zod';
import { SubscriberGroupCreateManySubscriberInputObjectSchema } from './SubscriberGroupCreateManySubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateManySubscriberInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriberGroupCreateManySubscriberInputObjectSchema),
        z
          .lazy(() => SubscriberGroupCreateManySubscriberInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberGroupCreateManySubscriberInputEnvelopeObjectSchema =
  Schema;
