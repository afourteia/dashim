import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './objects/SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateInputObjectSchema } from './objects/SubscriberGroupCreateInput.schema';
import { SubscriberGroupUncheckedCreateInputObjectSchema } from './objects/SubscriberGroupUncheckedCreateInput.schema';
import { SubscriberGroupUpdateInputObjectSchema } from './objects/SubscriberGroupUpdateInput.schema';
import { SubscriberGroupUncheckedUpdateInputObjectSchema } from './objects/SubscriberGroupUncheckedUpdateInput.schema';

export const SubscriberGroupUpsertSchema = z.object({
  where: SubscriberGroupWhereUniqueInputObjectSchema,
  create: z.union([
    SubscriberGroupCreateInputObjectSchema,
    SubscriberGroupUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SubscriberGroupUpdateInputObjectSchema,
    SubscriberGroupUncheckedUpdateInputObjectSchema,
  ]),
});
