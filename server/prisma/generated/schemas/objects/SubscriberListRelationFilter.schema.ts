import { z } from 'zod';
import { SubscriberWhereInputObjectSchema } from './SubscriberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberListRelationFilter> = z
  .object({
    every: z.lazy(() => SubscriberWhereInputObjectSchema).optional(),
    some: z.lazy(() => SubscriberWhereInputObjectSchema).optional(),
    none: z.lazy(() => SubscriberWhereInputObjectSchema).optional(),
  })
  .strict();

export const SubscriberListRelationFilterObjectSchema = Schema;
