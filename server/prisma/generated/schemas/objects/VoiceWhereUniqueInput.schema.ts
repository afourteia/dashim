import { z } from 'zod';
import { VoiceSubscriberGroupIdIdCompoundUniqueInputObjectSchema } from './VoiceSubscriberGroupIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriberGroupId_id: z
      .lazy(() => VoiceSubscriberGroupIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceWhereUniqueInputObjectSchema = Schema;
