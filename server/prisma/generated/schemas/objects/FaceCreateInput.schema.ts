import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutFaceInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    faceHash: z.string(),
    subscriberGroup: z.lazy(
      () => SubscriberGroupCreateNestedOneWithoutFaceInputObjectSchema,
    ),
  })
  .strict();

export const FaceCreateInputObjectSchema = Schema;
