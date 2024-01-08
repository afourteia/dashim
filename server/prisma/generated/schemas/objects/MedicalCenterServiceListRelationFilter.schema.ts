import { z } from 'zod';
import { MedicalCenterServiceWhereInputObjectSchema } from './MedicalCenterServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceListRelationFilter> = z
  .object({
    every: z.lazy(() => MedicalCenterServiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => MedicalCenterServiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => MedicalCenterServiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const MedicalCenterServiceListRelationFilterObjectSchema = Schema;
