import { z } from 'zod';
import { TenantMembersMemberIdIdCompoundUniqueInputObjectSchema } from './TenantMembersMemberIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    memberId_id: z
      .lazy(() => TenantMembersMemberIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantMembersWhereUniqueInputObjectSchema = Schema;
