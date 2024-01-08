import { z } from 'zod';
import { DeviceTypeWhereInputObjectSchema } from './objects/DeviceTypeWhereInput.schema';
import { DeviceTypeOrderByWithAggregationInputObjectSchema } from './objects/DeviceTypeOrderByWithAggregationInput.schema';
import { DeviceTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/DeviceTypeScalarWhereWithAggregatesInput.schema';
import { DeviceTypeScalarFieldEnumSchema } from './enums/DeviceTypeScalarFieldEnum.schema';

export const DeviceTypeGroupBySchema = z.object({
  where: DeviceTypeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DeviceTypeOrderByWithAggregationInputObjectSchema,
      DeviceTypeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DeviceTypeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DeviceTypeScalarFieldEnumSchema),
});
