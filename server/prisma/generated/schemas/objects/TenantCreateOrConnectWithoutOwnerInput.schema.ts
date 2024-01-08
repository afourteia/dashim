import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutOwnerInputObjectSchema } from './TenantCreateWithoutOwnerInput.schema';
import { TenantUncheckedCreateWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantCreateWithoutOwnerInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutOwnerInputObjectSchema),
    ]),
  })
  .strict();

export const TenantCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
