import { z } from 'zod';
import { SubscriberGroupSubscriberIdIdCompoundUniqueInputObjectSchema } from './SubscriberGroupSubscriberIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    nationalID: z.string().optional(),
    subscriberId_id: z
      .lazy(() => SubscriberGroupSubscriberIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberGroupWhereUniqueInputObjectSchema = Schema;
