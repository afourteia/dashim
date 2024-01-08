import { z } from 'zod';
import { TenantTypeUpdateWithoutTenantInputObjectSchema } from './TenantTypeUpdateWithoutTenantInput.schema';
import { TenantTypeUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedUpdateWithoutTenantInput.schema';
import { TenantTypeCreateWithoutTenantInputObjectSchema } from './TenantTypeCreateWithoutTenantInput.schema';
import { TenantTypeUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantTypeUpsertWithoutTenantInput> = z
  .object({
    update: z.union([
      z.lazy(() => TenantTypeUpdateWithoutTenantInputObjectSchema),
      z.lazy(() => TenantTypeUncheckedUpdateWithoutTenantInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantTypeCreateWithoutTenantInputObjectSchema),
      z.lazy(() => TenantTypeUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const TenantTypeUpsertWithoutTenantInputObjectSchema = Schema;
