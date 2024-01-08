import { z } from 'zod';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';
import { TenantUpdateManyMutationInputObjectSchema } from './TenantUpdateManyMutationInput.schema';
import { TenantUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantUncheckedUpdateManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateManyWithWhereWithoutTypeInput> = z
  .object({
    where: z.lazy(() => TenantScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TenantUpdateManyMutationInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateManyWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpdateManyWithWhereWithoutTypeInputObjectSchema = Schema;
