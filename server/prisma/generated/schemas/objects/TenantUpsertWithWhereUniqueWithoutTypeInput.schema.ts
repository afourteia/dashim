import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutTypeInputObjectSchema } from './TenantUpdateWithoutTypeInput.schema';
import { TenantUncheckedUpdateWithoutTypeInputObjectSchema } from './TenantUncheckedUpdateWithoutTypeInput.schema';
import { TenantCreateWithoutTypeInputObjectSchema } from './TenantCreateWithoutTypeInput.schema';
import { TenantUncheckedCreateWithoutTypeInputObjectSchema } from './TenantUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TenantUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantCreateWithoutTypeInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpsertWithWhereUniqueWithoutTypeInputObjectSchema = Schema;
