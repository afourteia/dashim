import { z } from 'zod';
import { SubscriberCreateManyInstitutionInputObjectSchema } from './SubscriberCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateManyInstitutionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SubscriberCreateManyInstitutionInputObjectSchema),
      z.lazy(() => SubscriberCreateManyInstitutionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SubscriberCreateManyInstitutionInputEnvelopeObjectSchema = Schema;
