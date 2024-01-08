import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInput> =
  z
    .object({
      where: z.lazy(
        () => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
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

export const MedicalCenterServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema =
  Schema;
