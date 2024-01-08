import { z } from 'zod';
import { TenantMembersCreateInputObjectSchema } from './objects/TenantMembersCreateInput.schema';
import { TenantMembersUncheckedCreateInputObjectSchema } from './objects/TenantMembersUncheckedCreateInput.schema';

export const TenantMembersCreateOneSchema = z.object({
  data: z.union([
    TenantMembersCreateInputObjectSchema,
    TenantMembersUncheckedCreateInputObjectSchema,
  ]),
});
