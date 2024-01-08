import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceSubscriberGroupIdIdCompoundUniqueInput> = z
  .object({
    subscriberGroupId: z.string(),
    id: z.string(),
  })
  .strict();

export const VoiceSubscriberGroupIdIdCompoundUniqueInputObjectSchema = Schema;
