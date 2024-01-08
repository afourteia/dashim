import { z } from 'zod';
import { TenantMembersWhereInputObjectSchema } from './objects/TenantMembersWhereInput.schema';
import { TenantMembersOrderByWithAggregationInputObjectSchema } from './objects/TenantMembersOrderByWithAggregationInput.schema';
import { TenantMembersScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantMembersScalarWhereWithAggregatesInput.schema';
import { TenantMembersScalarFieldEnumSchema } from './enums/TenantMembersScalarFieldEnum.schema';

export const TenantMembersGroupBySchema = z.object({
  where: TenantMembersWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TenantMembersOrderByWithAggregationInputObjectSchema,
      TenantMembersOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TenantMembersScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TenantMembersScalarFieldEnumSchema),
});
