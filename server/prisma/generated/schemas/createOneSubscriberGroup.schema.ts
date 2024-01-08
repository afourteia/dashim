import { z } from 'zod';
import { SubscriberGroupCreateInputObjectSchema } from './objects/SubscriberGroupCreateInput.schema';
import { SubscriberGroupUncheckedCreateInputObjectSchema } from './objects/SubscriberGroupUncheckedCreateInput.schema';

export const SubscriberGroupCreateOneSchema = z.object({
  data: z.union([
    SubscriberGroupCreateInputObjectSchema,
    SubscriberGroupUncheckedCreateInputObjectSchema,
  ]),
});
