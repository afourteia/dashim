import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceSubscriberGroupIdIdCompoundUniqueInput> = z
  .object({
    subscriberGroupId: z.string(),
    id: z.string(),
  })
  .strict();

export const FaceSubscriberGroupIdIdCompoundUniqueInputObjectSchema = Schema;
