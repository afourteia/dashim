import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutTypeInputObjectSchema } from './TenantCreateWithoutTypeInput.schema';
import { TenantUncheckedCreateWithoutTypeInputObjectSchema } from './TenantUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutTypeInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantCreateWithoutTypeInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const TenantCreateOrConnectWithoutTypeInputObjectSchema = Schema;
