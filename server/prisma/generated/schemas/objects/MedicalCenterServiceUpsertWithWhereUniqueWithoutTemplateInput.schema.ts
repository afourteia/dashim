import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUpdateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutTemplateInput.schema';
import { MedicalCenterServiceCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => MedicalCenterServiceUpdateWithoutTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutTemplateInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalCenterServiceCreateWithoutTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema =
  Schema;
