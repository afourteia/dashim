import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateOrConnectWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
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

export const MedicalCenterServiceCreateOrConnectWithoutTemplateInputObjectSchema =
  Schema;
