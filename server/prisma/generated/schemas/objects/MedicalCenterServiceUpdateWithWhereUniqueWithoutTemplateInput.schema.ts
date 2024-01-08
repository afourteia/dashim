import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUpdateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => MedicalCenterServiceUpdateWithoutTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema =
  Schema;
