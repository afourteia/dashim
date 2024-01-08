import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutServicesInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
        z.lazy(
          () => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema =
  Schema;
