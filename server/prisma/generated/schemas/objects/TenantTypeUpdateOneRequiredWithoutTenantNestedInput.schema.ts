import { z } from 'zod';
import { TenantTypeCreateWithoutTenantInputObjectSchema } from './TenantTypeCreateWithoutTenantInput.schema';
import { TenantTypeUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedCreateWithoutTenantInput.schema';
import { TenantTypeCreateOrConnectWithoutTenantInputObjectSchema } from './TenantTypeCreateOrConnectWithoutTenantInput.schema';
import { TenantTypeUpsertWithoutTenantInputObjectSchema } from './TenantTypeUpsertWithoutTenantInput.schema';
import { TenantTypeWhereUniqueInputObjectSchema } from './TenantTypeWhereUniqueInput.schema';
import { TenantTypeUpdateWithoutTenantInputObjectSchema } from './TenantTypeUpdateWithoutTenantInput.schema';
import { TenantTypeUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeUpdateOneRequiredWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantTypeCreateWithoutTenantInputObjectSchema),
          z.lazy(() => TenantTypeUncheckedCreateWithoutTenantInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantTypeCreateOrConnectWithoutTenantInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TenantTypeUpsertWithoutTenantInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantTypeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TenantTypeUpdateWithoutTenantInputObjectSchema),
          z.lazy(() => TenantTypeUncheckedUpdateWithoutTenantInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TenantTypeUpdateOneRequiredWithoutTenantNestedInputObjectSchema =
  Schema;
