import { z } from 'zod';
import { TenantTypeWhereInputObjectSchema } from './TenantTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => TenantTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TenantTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TenantTypeRelationFilterObjectSchema = Schema;
