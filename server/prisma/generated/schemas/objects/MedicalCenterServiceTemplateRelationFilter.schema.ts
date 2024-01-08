import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './MedicalCenterServiceTemplateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalCenterServiceTemplateWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalCenterServiceTemplateRelationFilterObjectSchema = Schema;
