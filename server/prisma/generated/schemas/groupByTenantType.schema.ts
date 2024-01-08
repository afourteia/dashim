import { z } from 'zod';
import { TenantTypeWhereInputObjectSchema } from './objects/TenantTypeWhereInput.schema';
import { TenantTypeOrderByWithAggregationInputObjectSchema } from './objects/TenantTypeOrderByWithAggregationInput.schema';
import { TenantTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantTypeScalarWhereWithAggregatesInput.schema';
import { TenantTypeScalarFieldEnumSchema } from './enums/TenantTypeScalarFieldEnum.schema';

export const TenantTypeGroupBySchema = z.object({
  where: TenantTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TenantTypeOrderByWithAggregationInputObjectSchema,
      TenantTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TenantTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TenantTypeScalarFieldEnumSchema),
});
