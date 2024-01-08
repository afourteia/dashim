import { z } from 'zod';
import { TenantCreateManyOwnerInputObjectSchema } from './TenantCreateManyOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantCreateManyOwnerInputObjectSchema),
      z.lazy(() => TenantCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantCreateManyOwnerInputEnvelopeObjectSchema = Schema;
