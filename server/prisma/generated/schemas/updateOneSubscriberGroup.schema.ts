import { z } from 'zod';
import { SubscriberGroupUpdateInputObjectSchema } from './objects/SubscriberGroupUpdateInput.schema';
import { SubscriberGroupUncheckedUpdateInputObjectSchema } from './objects/SubscriberGroupUncheckedUpdateInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';

export const SubscriberGroupUpdateOneSchema = z.object({
  data: z.union([
    SubscriberGroupUpdateInputObjectSchema,
    SubscriberGroupUncheckedUpdateInputObjectSchema,
  ]),
  where: SubscriberGroupWhereUniqueInputObjectSchema,
});
