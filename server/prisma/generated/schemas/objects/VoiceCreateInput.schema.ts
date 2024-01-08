import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutVoiceInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    voiceHash: z.string(),
    subscriberGroup: z.lazy(
      () => SubscriberGroupCreateNestedOneWithoutVoiceInputObjectSchema,
    ),
  })
  .strict();

export const VoiceCreateInputObjectSchema = Schema;
