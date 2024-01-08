import { z } from 'zod';
import { SubscriberGroupOrderByWithRelationInputObjectSchema } from './objects/SubscriberGroupOrderByWithRelationInput.schema';
import { SubscriberGroupWhereInputObjectSchema } from './objects/SubscriberGroupWhereInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupScalarFieldEnumSchema } from './enums/SubscriberGroupScalarFieldEnum.schema';

export const SubscriberGroupFindManySchema = z.object({
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
  distinct: z.array(SubscriberGroupScalarFieldEnumSchema).optional(),
});
