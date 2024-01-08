import { z } from 'zod';
import { SubscriberGroupCreateManyRelationshipInputObjectSchema } from './SubscriberGroupCreateManyRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateManyRelationshipInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriberGroupCreateManyRelationshipInputObjectSchema),
        z
          .lazy(() => SubscriberGroupCreateManyRelationshipInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberGroupCreateManyRelationshipInputEnvelopeObjectSchema =
  Schema;
