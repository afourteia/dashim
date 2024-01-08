import { z } from 'zod';
import { TenantMembersCreateManyMemberInputObjectSchema } from './TenantMembersCreateManyMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateManyMemberInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantMembersCreateManyMemberInputObjectSchema),
      z.lazy(() => TenantMembersCreateManyMemberInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantMembersCreateManyMemberInputEnvelopeObjectSchema = Schema;
