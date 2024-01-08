import { z } from 'zod';
import { SubscriberGroupWhereInputObjectSchema } from './objects/SubscriberGroupWhereInput.schema';

export const SubscriberGroupDeleteManySchema = z.object({
  where: SubscriberGroupWhereInputObjectSchema.optional(),
});
