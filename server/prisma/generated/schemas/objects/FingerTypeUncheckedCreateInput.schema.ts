import { z } from 'zod';
import { FingerprintUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedCreateNestedManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    fingerType: z
      .lazy(
        () =>
          FingerprintUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const FingerTypeUncheckedCreateInputObjectSchema = Schema;
