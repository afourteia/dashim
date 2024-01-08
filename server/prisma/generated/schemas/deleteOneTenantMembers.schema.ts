import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';

export const TenantMembersDeleteOneSchema = z.object({
  where: TenantMembersWhereUniqueInputObjectSchema,
});
