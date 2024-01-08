import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalCenterWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalCenterWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalCenterRelationFilterObjectSchema = Schema;
