import { z } from 'zod';
import { TenantCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToInstitutionInput.schema';
import { TenantCreateOrConnectWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateOrConnectWithoutAssignedToInstitutionInput.schema';
import { TenantUpsertWithoutAssignedToInstitutionInputObjectSchema } from './TenantUpsertWithoutAssignedToInstitutionInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUpdateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutAssignedToInstitutionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => TenantCreateWithoutAssignedToInstitutionInputObjectSchema,
          ),
          z.lazy(
            () =>
              TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            TenantCreateOrConnectWithoutAssignedToInstitutionInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => TenantUpsertWithoutAssignedToInstitutionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => TenantUpdateWithoutAssignedToInstitutionInputObjectSchema,
          ),
          z.lazy(
            () =>
              TenantUncheckedUpdateWithoutAssignedToInstitutionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TenantUpdateOneRequiredWithoutAssignedToInstitutionNestedInputObjectSchema =
  Schema;
