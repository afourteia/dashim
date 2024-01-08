import { z } from 'zod';
import { MedicalCenterUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUpdateWithoutServicesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutServicesInput.schema';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutServicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MedicalCenterUpdateWithoutServicesInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
      z.lazy(
        () => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MedicalCenterUpsertWithoutServicesInputObjectSchema = Schema;
