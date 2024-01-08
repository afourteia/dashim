import { z } from 'zod';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';
import { MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutServicesInput.schema';
import { MedicalCenterUpsertWithoutServicesInputObjectSchema } from './MedicalCenterUpsertWithoutServicesInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUpdateWithoutServicesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateOneRequiredWithoutServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
          z.lazy(
            () => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MedicalCenterUpsertWithoutServicesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => MedicalCenterUpdateWithoutServicesInputObjectSchema),
          z.lazy(
            () => MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterUpdateOneRequiredWithoutServicesNestedInputObjectSchema =
  Schema;
