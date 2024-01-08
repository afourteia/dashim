import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupSubscriberIdIdCompoundUniqueInput> =
  z
    .object({
      subscriberId: z.string(),
      id: z.string(),
    })
    .strict();

export const SubscriberGroupSubscriberIdIdCompoundUniqueInputObjectSchema =
  Schema;
