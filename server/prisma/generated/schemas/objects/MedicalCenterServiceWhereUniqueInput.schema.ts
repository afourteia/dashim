import { z } from 'zod';
import { MedicalCenterServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalCenterServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';
import { MedicalCenterServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema } from './MedicalCenterServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    medicalCenterId: z.string().optional(),
    medicalCenterId_medicalCenterCode: z
      .lazy(
        () =>
          MedicalCenterServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema,
      )
      .optional(),
    templateId_medicalCenterId_medicalCenterCode: z
      .lazy(
        () =>
          MedicalCenterServiceTemplateIdMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MedicalCenterServiceWhereUniqueInputObjectSchema = Schema;
