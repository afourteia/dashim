import { z } from 'zod';
import { DeviceTokenWhereInputObjectSchema } from './objects/DeviceTokenWhereInput.schema';
import { DeviceTokenOrderByWithAggregationInputObjectSchema } from './objects/DeviceTokenOrderByWithAggregationInput.schema';
import { DeviceTokenScalarWhereWithAggregatesInputObjectSchema } from './objects/DeviceTokenScalarWhereWithAggregatesInput.schema';
import { DeviceTokenScalarFieldEnumSchema } from './enums/DeviceTokenScalarFieldEnum.schema';

export const DeviceTokenGroupBySchema = z.object({
  where: DeviceTokenWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DeviceTokenOrderByWithAggregationInputObjectSchema,
      DeviceTokenOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DeviceTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DeviceTokenScalarFieldEnumSchema),
});
