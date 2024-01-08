import { z } from 'zod';
import { SubscriberGroupUpdateManyMutationInputObjectSchema } from './objects/SubscriberGroupUpdateManyMutationInput.schema';
import { SubscriberGroupWhereInputObjectSchema } from './objects/SubscriberGroupWhereInput.schema';

export const SubscriberGroupUpdateManySchema = z.object({
  data: SubscriberGroupUpdateManyMutationInputObjectSchema,
  where: SubscriberGroupWhereInputObjectSchema.optional(),
});
