import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUncheckedCreateWithoutSubscriberGroupInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      fingerTypeId: z.string(),
      fingerprintHash: z.string(),
    })
    .strict();

export const FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema =
  Schema;
