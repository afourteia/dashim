import { z } from 'zod';
import { DeviceTypeOrderByWithRelationInputObjectSchema } from './objects/DeviceTypeOrderByWithRelationInput.schema';
import { DeviceTypeWhereInputObjectSchema } from './objects/DeviceTypeWhereInput.schema';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';
import { DeviceTypeCountAggregateInputObjectSchema } from './objects/DeviceTypeCountAggregateInput.schema';
import { DeviceTypeMinAggregateInputObjectSchema } from './objects/DeviceTypeMinAggregateInput.schema';
import { DeviceTypeMaxAggregateInputObjectSchema } from './objects/DeviceTypeMaxAggregateInput.schema';

export const DeviceTypeAggregateSchema = z.object({
  orderBy: z
    .union([
      DeviceTypeOrderByWithRelationInputObjectSchema,
      DeviceTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypeWhereInputObjectSchema.optional(),
  cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DeviceTypeCountAggregateInputObjectSchema])
    .optional(),
  _min: DeviceTypeMinAggregateInputObjectSchema.optional(),
  _max: DeviceTypeMaxAggregateInputObjectSchema.optional(),
});
