import { z } from 'zod';
import { TenantCreateManyTypeInputObjectSchema } from './TenantCreateManyTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateManyTypeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantCreateManyTypeInputObjectSchema),
      z.lazy(() => TenantCreateManyTypeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantCreateManyTypeInputEnvelopeObjectSchema = Schema;
