import { z } from 'zod';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupListRelationFilter> = z
  .object({
    every: z.lazy(() => SubscriberGroupWhereInputObjectSchema).optional(),
    some: z.lazy(() => SubscriberGroupWhereInputObjectSchema).optional(),
    none: z.lazy(() => SubscriberGroupWhereInputObjectSchema).optional(),
  })
  .strict();

export const SubscriberGroupListRelationFilterObjectSchema = Schema;
