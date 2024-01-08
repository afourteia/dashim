import { z } from 'zod';
import { SubscriberGroupWhereInputObjectSchema } from './objects/SubscriberGroupWhereInput.schema';
import { SubscriberGroupOrderByWithAggregationInputObjectSchema } from './objects/SubscriberGroupOrderByWithAggregationInput.schema';
import { SubscriberGroupScalarWhereWithAggregatesInputObjectSchema } from './objects/SubscriberGroupScalarWhereWithAggregatesInput.schema';
import { SubscriberGroupScalarFieldEnumSchema } from './enums/SubscriberGroupScalarFieldEnum.schema';

export const SubscriberGroupGroupBySchema = z.object({
  where: SubscriberGroupWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SubscriberGroupOrderByWithAggregationInputObjectSchema,
      SubscriberGroupOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SubscriberGroupScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SubscriberGroupScalarFieldEnumSchema),
});
