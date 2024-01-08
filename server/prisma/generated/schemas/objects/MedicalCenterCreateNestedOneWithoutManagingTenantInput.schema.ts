import { z } from 'zod';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutManagingTenantInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutManagingTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalCenterCreateWithoutManagingTenantInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedOneWithoutManagingTenantInputObjectSchema =
  Schema;
