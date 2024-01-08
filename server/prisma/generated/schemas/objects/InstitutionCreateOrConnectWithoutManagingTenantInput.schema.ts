import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutManagingTenantInputObjectSchema } from './InstitutionCreateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedCreateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateOrConnectWithoutManagingTenantInput> =
  z
    .object({
      where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InstitutionCreateWithoutManagingTenantInputObjectSchema),
        z.lazy(
          () =>
            InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionCreateOrConnectWithoutManagingTenantInputObjectSchema =
  Schema;
