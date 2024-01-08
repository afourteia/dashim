import { z } from 'zod';
import { TenantMembersWhereInputObjectSchema } from './objects/TenantMembersWhereInput.schema';

export const TenantMembersDeleteManySchema = z.object({
  where: TenantMembersWhereInputObjectSchema.optional(),
});
