import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUpsertWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUpsertWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateUpdateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUpdateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUpdateOneRequiredWithoutServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateUpsertWithoutServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUpdateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateUpdateOneRequiredWithoutServicesNestedInputObjectSchema =
  Schema;
