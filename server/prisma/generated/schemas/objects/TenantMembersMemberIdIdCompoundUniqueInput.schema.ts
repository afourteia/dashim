import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersMemberIdIdCompoundUniqueInput> = z
  .object({
    memberId: z.string(),
    id: z.string(),
  })
  .strict();

export const TenantMembersMemberIdIdCompoundUniqueInputObjectSchema = Schema;
