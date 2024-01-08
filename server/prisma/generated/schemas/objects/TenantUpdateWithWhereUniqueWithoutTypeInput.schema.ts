import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutTypeInputObjectSchema } from './TenantUpdateWithoutTypeInput.schema';
import { TenantUncheckedUpdateWithoutTypeInputObjectSchema } from './TenantUncheckedUpdateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TenantUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpdateWithWhereUniqueWithoutTypeInputObjectSchema = Schema;
