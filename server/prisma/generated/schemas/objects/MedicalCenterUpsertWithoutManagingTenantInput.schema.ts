import { z } from 'zod';
import { MedicalCenterUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutManagingTenantInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => MedicalCenterUpdateWithoutManagingTenantInputObjectSchema),
        z.lazy(
          () =>
            MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
        z.lazy(
          () =>
            MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterUpsertWithoutManagingTenantInputObjectSchema = Schema;
