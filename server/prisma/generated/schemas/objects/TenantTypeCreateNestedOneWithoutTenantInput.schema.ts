import { z } from 'zod';
import { TenantTypeCreateWithoutTenantInputObjectSchema } from './TenantTypeCreateWithoutTenantInput.schema';
import { TenantTypeUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedCreateWithoutTenantInput.schema';
import { TenantTypeCreateOrConnectWithoutTenantInputObjectSchema } from './TenantTypeCreateOrConnectWithoutTenantInput.schema';
import { TenantTypeWhereUniqueInputObjectSchema } from './TenantTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeCreateNestedOneWithoutTenantInput> = z
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
    connect: z.lazy(() => TenantTypeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TenantTypeCreateNestedOneWithoutTenantInputObjectSchema = Schema;
