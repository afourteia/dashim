import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutAssignedToInstitutionInput> =
  z
    .object({
      where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TenantCreateWithoutAssignedToInstitutionInputObjectSchema),
        z.lazy(
          () =>
            TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantCreateOrConnectWithoutAssignedToInstitutionInputObjectSchema =
  Schema;
