import { z } from 'zod';
import { UserCreateNestedOneWithoutMemberOfInputObjectSchema } from './UserCreateNestedOneWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateWithoutTenantInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    member: z.lazy(() => UserCreateNestedOneWithoutMemberOfInputObjectSchema),
  })
  .strict();

export const TenantMembersCreateWithoutTenantInputObjectSchema = Schema;
