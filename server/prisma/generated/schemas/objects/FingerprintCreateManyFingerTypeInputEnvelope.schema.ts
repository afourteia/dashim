import { z } from 'zod';
import { FingerprintCreateManyFingerTypeInputObjectSchema } from './FingerprintCreateManyFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateManyFingerTypeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FingerprintCreateManyFingerTypeInputObjectSchema),
      z.lazy(() => FingerprintCreateManyFingerTypeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const FingerprintCreateManyFingerTypeInputEnvelopeObjectSchema = Schema;
