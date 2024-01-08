import { z } from 'zod';
import { TenantMembersOrderByWithRelationInputObjectSchema } from './objects/TenantMembersOrderByWithRelationInput.schema';
import { TenantMembersWhereInputObjectSchema } from './objects/TenantMembersWhereInput.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './objects/TenantMembersWhereUniqueInput.schema';
import { TenantMembersCountAggregateInputObjectSchema } from './objects/TenantMembersCountAggregateInput.schema';
import { TenantMembersMinAggregateInputObjectSchema } from './objects/TenantMembersMinAggregateInput.schema';
import { TenantMembersMaxAggregateInputObjectSchema } from './objects/TenantMembersMaxAggregateInput.schema';

export const TenantMembersAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), TenantMembersCountAggregateInputObjectSchema])
    .optional(),
  _min: TenantMembersMinAggregateInputObjectSchema.optional(),
  _max: TenantMembersMaxAggregateInputObjectSchema.optional(),
});
