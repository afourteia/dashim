import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutOwnerInputObjectSchema } from './TenantUpdateWithoutOwnerInput.schema';
import { TenantUncheckedUpdateWithoutOwnerInputObjectSchema } from './TenantUncheckedUpdateWithoutOwnerInput.schema';
import { TenantCreateWithoutOwnerInputObjectSchema } from './TenantCreateWithoutOwnerInput.schema';
import { TenantUncheckedCreateWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TenantUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
