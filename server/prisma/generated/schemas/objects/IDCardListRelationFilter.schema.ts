import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardListRelationFilter> = z
  .object({
    every: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
    some: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
    none: z.lazy(() => IDCardWhereInputObjectSchema).optional(),
  })
  .strict();

export const IDCardListRelationFilterObjectSchema = Schema;
