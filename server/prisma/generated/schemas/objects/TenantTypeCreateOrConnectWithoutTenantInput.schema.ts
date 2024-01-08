import { z } from 'zod';
import { TenantTypeWhereUniqueInputObjectSchema } from './TenantTypeWhereUniqueInput.schema';
import { TenantTypeCreateWithoutTenantInputObjectSchema } from './TenantTypeCreateWithoutTenantInput.schema';
import { TenantTypeUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeCreateOrConnectWithoutTenantInput> = z
  .object({
    where: z.lazy(() => TenantTypeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantTypeCreateWithoutTenantInputObjectSchema),
      z.lazy(() => TenantTypeUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const TenantTypeCreateOrConnectWithoutTenantInputObjectSchema = Schema;
