import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';

export const SubscriberGroupDeleteOneSchema = z.object({
  where: SubscriberGroupWhereUniqueInputObjectSchema,
});
