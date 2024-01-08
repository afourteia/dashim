import { z } from 'zod';
import { SubscriberGroupOrderByWithRelationInputObjectSchema } from './objects/SubscriberGroupOrderByWithRelationInput.schema';
import { SubscriberGroupWhereInputObjectSchema } from './objects/SubscriberGroupWhereInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCountAggregateInputObjectSchema } from './objects/SubscriberGroupCountAggregateInput.schema';
import { SubscriberGroupMinAggregateInputObjectSchema } from './objects/SubscriberGroupMinAggregateInput.schema';
import { SubscriberGroupMaxAggregateInputObjectSchema } from './objects/SubscriberGroupMaxAggregateInput.schema';

export const SubscriberGroupAggregateSchema = z.object({
  orderBy: z
    .union([
      SubscriberGroupOrderByWithRelationInputObjectSchema,
      SubscriberGroupOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SubscriberGroupWhereInputObjectSchema.optional(),
  cursor: SubscriberGroupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SubscriberGroupCountAggregateInputObjectSchema])
    .optional(),
  _min: SubscriberGroupMinAggregateInputObjectSchema.optional(),
  _max: SubscriberGroupMaxAggregateInputObjectSchema.optional(),
});
