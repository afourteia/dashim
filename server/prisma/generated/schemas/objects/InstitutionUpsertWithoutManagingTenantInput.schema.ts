import { z } from 'zod';
import { InstitutionUpdateWithoutManagingTenantInputObjectSchema } from './InstitutionUpdateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedUpdateWithoutManagingTenantInput.schema';
import { InstitutionCreateWithoutManagingTenantInputObjectSchema } from './InstitutionCreateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedCreateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpsertWithoutManagingTenantInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstitutionUpdateWithoutManagingTenantInputObjectSchema),
      z.lazy(
        () => InstitutionUncheckedUpdateWithoutManagingTenantInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => InstitutionCreateWithoutManagingTenantInputObjectSchema),
      z.lazy(
        () => InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const InstitutionUpsertWithoutManagingTenantInputObjectSchema = Schema;
