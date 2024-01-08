import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutOwnerInputObjectSchema } from './TenantUpdateWithoutOwnerInput.schema';
import { TenantUncheckedUpdateWithoutOwnerInputObjectSchema } from './TenantUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateWithWhereUniqueWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TenantUpdateWithoutOwnerInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
