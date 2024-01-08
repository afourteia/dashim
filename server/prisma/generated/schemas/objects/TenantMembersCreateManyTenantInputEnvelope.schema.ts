import { z } from 'zod';
import { TenantMembersCreateManyTenantInputObjectSchema } from './TenantMembersCreateManyTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateManyTenantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantMembersCreateManyTenantInputObjectSchema),
      z.lazy(() => TenantMembersCreateManyTenantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantMembersCreateManyTenantInputEnvelopeObjectSchema = Schema;
