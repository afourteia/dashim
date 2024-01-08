import { z } from 'zod';
import { FingerprintWhereInputObjectSchema } from './FingerprintWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintListRelationFilter> = z
  .object({
    every: z.lazy(() => FingerprintWhereInputObjectSchema).optional(),
    some: z.lazy(() => FingerprintWhereInputObjectSchema).optional(),
    none: z.lazy(() => FingerprintWhereInputObjectSchema).optional(),
  })
  .strict();

export const FingerprintListRelationFilterObjectSchema = Schema;
