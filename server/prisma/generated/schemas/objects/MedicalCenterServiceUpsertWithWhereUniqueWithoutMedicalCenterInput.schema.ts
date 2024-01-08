import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => MedicalCenterServiceUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
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

export const MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
