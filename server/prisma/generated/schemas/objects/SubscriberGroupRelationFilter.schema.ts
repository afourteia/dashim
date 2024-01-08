import { z } from 'zod';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupRelationFilter> = z
  .object({
    is: z
      .lazy(() => SubscriberGroupWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SubscriberGroupWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SubscriberGroupRelationFilterObjectSchema = Schema;
