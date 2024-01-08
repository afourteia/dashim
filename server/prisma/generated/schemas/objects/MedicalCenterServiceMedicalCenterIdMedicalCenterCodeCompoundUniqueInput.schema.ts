import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInput> =
  z
    .object({
      medicalCenterId: z.string(),
      medicalCenterCode: z.string(),
    })
    .strict();

export const MedicalCenterServiceMedicalCenterIdMedicalCenterCodeCompoundUniqueInputObjectSchema =
  Schema;
