import { z } from 'zod';
import { TenantMembersUpdateInputObjectSchema } from './objects/TenantMembersUpdateInput.schema';
import { TenantMembersUncheckedUpdateInputObjectSchema } from './objects/TenantMembersUncheckedUpdateInput.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';

export const TenantMembersUpdateOneSchema = z.object({
  data: z.union([
    TenantMembersUpdateInputObjectSchema,
    TenantMembersUncheckedUpdateInputObjectSchema,
  ]),
  where: TenantMembersWhereUniqueInputObjectSchema,
});
