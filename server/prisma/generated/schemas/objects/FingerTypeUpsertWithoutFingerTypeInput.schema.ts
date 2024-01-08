import { z } from 'zod';
import { FingerTypeUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeUpdateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerTypeCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeUpsertWithoutFingerTypeInput> = z
  .object({
    update: z.union([
      z.lazy(() => FingerTypeUpdateWithoutFingerTypeInputObjectSchema),
      z.lazy(() => FingerTypeUncheckedUpdateWithoutFingerTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FingerTypeCreateWithoutFingerTypeInputObjectSchema),
      z.lazy(() => FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema),
    ]),
  })
  .strict();

export const FingerTypeUpsertWithoutFingerTypeInputObjectSchema = Schema;
