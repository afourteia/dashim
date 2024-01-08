import { z } from 'zod';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutManagingTenantInput.schema';
import { MedicalCenterUpsertWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpsertWithoutManagingTenantInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUncheckedUpdateOneWithoutManagingTenantNestedInput> =
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
      upsert: z
        .lazy(() => MedicalCenterUpsertWithoutManagingTenantInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MedicalCenterUpdateWithoutManagingTenantInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterUncheckedUpdateOneWithoutManagingTenantNestedInputObjectSchema =
  Schema;
