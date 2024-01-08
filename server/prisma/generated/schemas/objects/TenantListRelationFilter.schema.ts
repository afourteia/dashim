import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantListRelationFilter> = z
  .object({
    every: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    some: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    none: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  })
  .strict();

export const TenantListRelationFilterObjectSchema = Schema;
