import { z } from 'zod';
import { MedicalCenterServiceTemplateUpdateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUpdateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUpsertWithoutServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUpdateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceTemplateUpsertWithoutServicesInputObjectSchema =
  Schema;
