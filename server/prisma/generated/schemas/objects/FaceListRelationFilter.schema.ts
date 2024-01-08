import { z } from 'zod';
import { FaceWhereInputObjectSchema } from './FaceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceListRelationFilter> = z
  .object({
    every: z.lazy(() => FaceWhereInputObjectSchema).optional(),
    some: z.lazy(() => FaceWhereInputObjectSchema).optional(),
    none: z.lazy(() => FaceWhereInputObjectSchema).optional(),
  })
  .strict();

export const FaceListRelationFilterObjectSchema = Schema;
