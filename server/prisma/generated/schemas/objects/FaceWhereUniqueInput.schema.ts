import { z } from 'zod';
import { FaceSubscriberGroupIdIdCompoundUniqueInputObjectSchema } from './FaceSubscriberGroupIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriberGroupId_id: z
      .lazy(() => FaceSubscriberGroupIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const FaceWhereUniqueInputObjectSchema = Schema;
