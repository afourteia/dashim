import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintIdFingerTypeIdCompoundUniqueInput> = z
  .object({
    id: z.string(),
    fingerTypeId: z.string(),
  })
  .strict();

export const FingerprintIdFingerTypeIdCompoundUniqueInputObjectSchema = Schema;
