import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema =
  Schema;
