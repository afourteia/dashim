import { z } from 'zod';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantCreateOrConnectWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateOrConnectWithoutAssignedToMedicalCenterInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedOneWithoutAssignedToMedicalCenterInput> =
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
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TenantCreateNestedOneWithoutAssignedToMedicalCenterInputObjectSchema =
  Schema;
