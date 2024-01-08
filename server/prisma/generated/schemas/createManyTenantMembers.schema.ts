import { z } from 'zod';
import { TenantMembersCreateManyInputObjectSchema } from './objects/TenantMembersCreateManyInput.schema';

export const TenantMembersCreateManySchema = z.object({
  data: z.union([
    TenantMembersCreateManyInputObjectSchema,
    z.array(TenantMembersCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
