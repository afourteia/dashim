import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';

export const SubscriberGroupFindUniqueSchema = z.object({
  where: SubscriberGroupWhereUniqueInputObjectSchema,
});
