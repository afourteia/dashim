import { z } from 'zod';
import { TenantUpdateWithoutMembersInputObjectSchema } from './TenantUpdateWithoutMembersInput.schema';
import { TenantUncheckedUpdateWithoutMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutMembersInput.schema';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithoutMembersInput> = z
  .object({
    update: z.union([
      z.lazy(() => TenantUpdateWithoutMembersInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutMembersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpsertWithoutMembersInputObjectSchema = Schema;
