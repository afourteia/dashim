import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => MedicalCenterServiceUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
