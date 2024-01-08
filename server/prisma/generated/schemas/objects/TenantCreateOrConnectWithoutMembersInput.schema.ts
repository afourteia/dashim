import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutMembersInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const TenantCreateOrConnectWithoutMembersInputObjectSchema = Schema;
