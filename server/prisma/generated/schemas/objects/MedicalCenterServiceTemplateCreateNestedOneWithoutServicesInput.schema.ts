import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateCreateNestedOneWithoutServicesInput> =
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
      connect: z
        .lazy(() => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateCreateNestedOneWithoutServicesInputObjectSchema =
  Schema;
