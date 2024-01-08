import { z } from 'zod';
import { InstitutionCreateWithoutManagingTenantInputObjectSchema } from './InstitutionCreateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedCreateWithoutManagingTenantInput.schema';
import { InstitutionCreateOrConnectWithoutManagingTenantInputObjectSchema } from './InstitutionCreateOrConnectWithoutManagingTenantInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUncheckedCreateNestedOneWithoutManagingTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstitutionCreateWithoutManagingTenantInputObjectSchema),
          z.lazy(
            () =>
              InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InstitutionCreateOrConnectWithoutManagingTenantInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const InstitutionUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema =
  Schema;
