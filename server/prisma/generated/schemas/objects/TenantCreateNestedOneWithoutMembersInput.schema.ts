import { z } from 'zod';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';
import { TenantCreateOrConnectWithoutMembersInputObjectSchema } from './TenantCreateOrConnectWithoutMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedOneWithoutMembersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
        z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TenantCreateOrConnectWithoutMembersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TenantCreateNestedOneWithoutMembersInputObjectSchema = Schema;
