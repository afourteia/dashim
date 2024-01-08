import { z } from 'zod';
import { TenantCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToInstitutionInput.schema';
import { TenantCreateOrConnectWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateOrConnectWithoutAssignedToInstitutionInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedOneWithoutAssignedToInstitutionInput> =
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
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TenantCreateNestedOneWithoutAssignedToInstitutionInputObjectSchema =
  Schema;
