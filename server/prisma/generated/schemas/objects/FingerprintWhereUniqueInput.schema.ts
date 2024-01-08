import { z } from 'zod';
import { FingerprintSubscriberGroupIdIdCompoundUniqueInputObjectSchema } from './FingerprintSubscriberGroupIdIdCompoundUniqueInput.schema';
import { FingerprintIdFingerTypeIdCompoundUniqueInputObjectSchema } from './FingerprintIdFingerTypeIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    fingerprintHash: z.string().optional(),
    subscriberGroupId_id: z
      .lazy(() => FingerprintSubscriberGroupIdIdCompoundUniqueInputObjectSchema)
      .optional(),
    id_fingerTypeId: z
      .lazy(() => FingerprintIdFingerTypeIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const FingerprintWhereUniqueInputObjectSchema = Schema;
