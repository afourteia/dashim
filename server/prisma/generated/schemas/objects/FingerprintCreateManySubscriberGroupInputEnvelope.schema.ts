import { z } from 'zod';
import { FingerprintCreateManySubscriberGroupInputObjectSchema } from './FingerprintCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateManySubscriberGroupInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FingerprintCreateManySubscriberGroupInputObjectSchema),
        z
          .lazy(() => FingerprintCreateManySubscriberGroupInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FingerprintCreateManySubscriberGroupInputEnvelopeObjectSchema =
  Schema;
