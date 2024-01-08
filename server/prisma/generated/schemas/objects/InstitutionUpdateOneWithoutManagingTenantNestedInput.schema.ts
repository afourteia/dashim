import { z } from 'zod';
import { InstitutionCreateWithoutManagingTenantInputObjectSchema } from './InstitutionCreateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedCreateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedCreateWithoutManagingTenantInput.schema';
import { InstitutionCreateOrConnectWithoutManagingTenantInputObjectSchema } from './InstitutionCreateOrConnectWithoutManagingTenantInput.schema';
import { InstitutionUpsertWithoutManagingTenantInputObjectSchema } from './InstitutionUpsertWithoutManagingTenantInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutManagingTenantInputObjectSchema } from './InstitutionUpdateWithoutManagingTenantInput.schema';
import { InstitutionUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './InstitutionUncheckedUpdateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpdateOneWithoutManagingTenantNestedInput> =
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
      upsert: z
        .lazy(() => InstitutionUpsertWithoutManagingTenantInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstitutionUpdateWithoutManagingTenantInputObjectSchema),
          z.lazy(
            () =>
              InstitutionUncheckedUpdateWithoutManagingTenantInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InstitutionUpdateOneWithoutManagingTenantNestedInputObjectSchema =
  Schema;
