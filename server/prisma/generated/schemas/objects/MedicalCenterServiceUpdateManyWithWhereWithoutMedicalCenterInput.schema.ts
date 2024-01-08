import { z } from 'zod';
import { MedicalCenterServiceScalarWhereInputObjectSchema } from './MedicalCenterServiceScalarWhereInput.schema';
import { MedicalCenterServiceUpdateManyMutationInputObjectSchema } from './MedicalCenterServiceUpdateManyMutationInput.schema';
import { MedicalCenterServiceUncheckedUpdateManyWithoutServicesInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateManyWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalCenterServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateManyWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema =
  Schema;
