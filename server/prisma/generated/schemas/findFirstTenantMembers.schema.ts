import { z } from 'zod';
import { TenantMembersOrderByWithRelationInputObjectSchema } from './objects/TenantMembersOrderByWithRelationInput.schema';
import { TenantMembersWhereInputObjectSchema } from './objects/TenantMembersWhereInput.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';
import { TenantMembersScalarFieldEnumSchema } from './enums/TenantMembersScalarFieldEnum.schema';

export const TenantMembersFindFirstSchema = z.object({
  orderBy: z
    .union([
      TenantMembersOrderByWithRelationInputObjectSchema,
      TenantMembersOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantMembersWhereInputObjectSchema.optional(),
  cursor: TenantMembersWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantMembersScalarFieldEnumSchema).optional(),
});
