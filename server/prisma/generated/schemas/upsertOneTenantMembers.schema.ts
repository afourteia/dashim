import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';
import { TenantMembersCreateInputObjectSchema } from './objects/TenantMembersCreateInput.schema';
import { TenantMembersUncheckedCreateInputObjectSchema } from './objects/TenantMembersUncheckedCreateInput.schema';
import { TenantMembersUpdateInputObjectSchema } from './objects/TenantMembersUpdateInput.schema';
import { TenantMembersUncheckedUpdateInputObjectSchema } from './objects/TenantMembersUncheckedUpdateInput.schema';

export const TenantMembersUpsertSchema = z.object({
  where: TenantMembersWhereUniqueInputObjectSchema,
  create: z.union([
    TenantMembersCreateInputObjectSchema,
    TenantMembersUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TenantMembersUpdateInputObjectSchema,
    TenantMembersUncheckedUpdateInputObjectSchema,
  ]),
});
