import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    tenantId: z.string(),
    memberId: z.string(),
  })
  .strict();

export const TenantMembersCreateManyInputObjectSchema = Schema;
