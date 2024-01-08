import { z } from 'zod';
import { SubscriberWhereInputObjectSchema } from './SubscriberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberRelationFilter> = z
  .object({
    is: z
      .lazy(() => SubscriberWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SubscriberWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SubscriberRelationFilterObjectSchema = Schema;
