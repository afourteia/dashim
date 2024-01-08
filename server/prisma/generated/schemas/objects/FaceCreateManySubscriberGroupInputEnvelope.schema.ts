import { z } from 'zod';
import { FaceCreateManySubscriberGroupInputObjectSchema } from './FaceCreateManySubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateManySubscriberGroupInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FaceCreateManySubscriberGroupInputObjectSchema),
      z.lazy(() => FaceCreateManySubscriberGroupInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const FaceCreateManySubscriberGroupInputEnvelopeObjectSchema = Schema;
