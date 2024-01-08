import { z } from 'zod';
import { TenantUpdateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUpdateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToInstitutionInput.schema';
import { TenantCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantCreateWithoutAssignedToInstitutionInput.schema';
import { TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithoutAssignedToInstitutionInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TenantUpdateWithoutAssignedToInstitutionInputObjectSchema),
        z.lazy(
          () =>
            TenantUncheckedUpdateWithoutAssignedToInstitutionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TenantCreateWithoutAssignedToInstitutionInputObjectSchema),
        z.lazy(
          () =>
            TenantUncheckedCreateWithoutAssignedToInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantUpsertWithoutAssignedToInstitutionInputObjectSchema = Schema;
