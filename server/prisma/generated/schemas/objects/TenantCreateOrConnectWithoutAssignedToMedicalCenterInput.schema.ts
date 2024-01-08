import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutAssignedToMedicalCenterInput> =
  z
    .object({
      where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
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

export const TenantCreateOrConnectWithoutAssignedToMedicalCenterInputObjectSchema =
  Schema;
