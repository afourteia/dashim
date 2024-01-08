import { z } from 'zod';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantCreateOrConnectWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateOrConnectWithoutAssignedToMedicalCenterInput.schema';
import { TenantUpsertWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUpsertWithoutAssignedToMedicalCenterInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutAssignedToMedicalCenterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema,
          ),
          z.lazy(
            () =>
              TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            TenantCreateOrConnectWithoutAssignedToMedicalCenterInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => TenantUpsertWithoutAssignedToMedicalCenterInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema,
          ),
          z.lazy(
            () =>
              TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TenantUpdateOneRequiredWithoutAssignedToMedicalCenterNestedInputObjectSchema =
  Schema;
