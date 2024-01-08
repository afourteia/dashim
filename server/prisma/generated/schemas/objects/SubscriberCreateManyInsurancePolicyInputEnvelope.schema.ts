import { z } from 'zod';
import { SubscriberCreateManyInsurancePolicyInputObjectSchema } from './SubscriberCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriberCreateManyInsurancePolicyInputObjectSchema),
        z
          .lazy(() => SubscriberCreateManyInsurancePolicyInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriberCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
