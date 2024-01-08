import { z } from 'zod';
import { TenantTypeOrderByWithRelationInputObjectSchema } from './objects/TenantTypeOrderByWithRelationInput.schema';
import { TenantTypeWhereInputObjectSchema } from './objects/TenantTypeWhereInput.schema';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';
import { TenantTypeCountAggregateInputObjectSchema } from './objects/TenantTypeCountAggregateInput.schema';
import { TenantTypeMinAggregateInputObjectSchema } from './objects/TenantTypeMinAggregateInput.schema';
import { TenantTypeMaxAggregateInputObjectSchema } from './objects/TenantTypeMaxAggregateInput.schema';

export const TenantTypeAggregateSchema = z.object({
  orderBy: z
    .union([
      TenantTypeOrderByWithRelationInputObjectSchema,
      TenantTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantTypeWhereInputObjectSchema.optional(),
  cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TenantTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: TenantTypeMinAggregateInputObjectSchema.optional(),
  _max: TenantTypeMaxAggregateInputObjectSchema.optional(),
});
