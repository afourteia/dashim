import { z } from 'zod';
import { TenantUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './TenantUncheckedCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeUncheckedCreateInput> = z
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
      .lazy(() => TenantUncheckedCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantTypeUncheckedCreateInputObjectSchema = Schema;
