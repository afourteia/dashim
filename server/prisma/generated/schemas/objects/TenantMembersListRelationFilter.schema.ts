import { z } from 'zod';
import { TenantMembersWhereInputObjectSchema } from './TenantMembersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersListRelationFilter> = z
  .object({
    every: z.lazy(() => TenantMembersWhereInputObjectSchema).optional(),
    some: z.lazy(() => TenantMembersWhereInputObjectSchema).optional(),
    none: z.lazy(() => TenantMembersWhereInputObjectSchema).optional(),
  })
  .strict();

export const TenantMembersListRelationFilterObjectSchema = Schema;
