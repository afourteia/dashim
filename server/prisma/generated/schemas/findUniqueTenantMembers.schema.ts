import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';

export const TenantMembersFindUniqueSchema = z.object({
  where: TenantMembersWhereUniqueInputObjectSchema,
});
