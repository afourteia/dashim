import { z } from 'zod';
import { TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithoutAssignedToMedicalCenterInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantUpsertWithoutAssignedToMedicalCenterInputObjectSchema =
  Schema;
