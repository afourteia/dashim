import { z } from 'zod';
import { SubscriberGroupCreateManyInputObjectSchema } from './objects/SubscriberGroupCreateManyInput.schema';

export const SubscriberGroupCreateManySchema = z.object({
  data: z.union([
    SubscriberGroupCreateManyInputObjectSchema,
    z.array(SubscriberGroupCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
