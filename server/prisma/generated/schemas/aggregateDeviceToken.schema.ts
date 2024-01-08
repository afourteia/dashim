import { z } from 'zod';
import { DeviceTokenOrderByWithRelationInputObjectSchema } from './objects/DeviceTokenOrderByWithRelationInput.schema';
import { DeviceTokenWhereInputObjectSchema } from './objects/DeviceTokenWhereInput.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCountAggregateInputObjectSchema } from './objects/DeviceTokenCountAggregateInput.schema';
import { DeviceTokenMinAggregateInputObjectSchema } from './objects/DeviceTokenMinAggregateInput.schema';
import { DeviceTokenMaxAggregateInputObjectSchema } from './objects/DeviceTokenMaxAggregateInput.schema';

export const DeviceTokenAggregateSchema = z.object({
  orderBy: z
    .union([
      DeviceTokenOrderByWithRelationInputObjectSchema,
      DeviceTokenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTokenWhereInputObjectSchema.optional(),
  cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DeviceTokenCountAggregateInputObjectSchema])
    .optional(),
  _min: DeviceTokenMinAggregateInputObjectSchema.optional(),
  _max: DeviceTokenMaxAggregateInputObjectSchema.optional(),
});
