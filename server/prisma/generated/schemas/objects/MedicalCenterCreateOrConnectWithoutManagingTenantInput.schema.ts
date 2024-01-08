import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutManagingTenantInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
        z.lazy(
          () =>
            MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema =
  Schema;
