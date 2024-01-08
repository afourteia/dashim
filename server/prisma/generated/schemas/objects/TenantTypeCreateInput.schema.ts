import { z } from 'zod';
import { TenantCreateNestedManyWithoutTypeInputObjectSchema } from './TenantCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    tenant: z
      .lazy(() => TenantCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantTypeCreateInputObjectSchema = Schema;
