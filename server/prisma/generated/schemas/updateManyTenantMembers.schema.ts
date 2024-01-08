import { z } from 'zod';
import { TenantMembersUpdateManyMutationInputObjectSchema } from './objects/TenantMembersUpdateManyMutationInput.schema';
import { TenantMembersWhereInputObjectSchema } from './objects/TenantMembersWhereInput.schema';

export const TenantMembersUpdateManySchema = z.object({
  data: TenantMembersUpdateManyMutationInputObjectSchema,
  where: TenantMembersWhereInputObjectSchema.optional(),
});
