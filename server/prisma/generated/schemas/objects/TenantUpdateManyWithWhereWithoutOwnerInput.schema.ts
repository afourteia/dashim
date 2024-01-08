import { z } from 'zod';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';
import { TenantUpdateManyMutationInputObjectSchema } from './TenantUpdateManyMutationInput.schema';
import { TenantUncheckedUpdateManyWithoutOwnerOfInputObjectSchema } from './TenantUncheckedUpdateManyWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => TenantScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TenantUpdateManyMutationInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateManyWithoutOwnerOfInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
