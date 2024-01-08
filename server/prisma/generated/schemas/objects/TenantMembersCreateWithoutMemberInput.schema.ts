import { z } from 'zod';
import { TenantCreateNestedOneWithoutMembersInputObjectSchema } from './TenantCreateNestedOneWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateWithoutMemberInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    tenant: z.lazy(() => TenantCreateNestedOneWithoutMembersInputObjectSchema),
  })
  .strict();

export const TenantMembersCreateWithoutMemberInputObjectSchema = Schema;
