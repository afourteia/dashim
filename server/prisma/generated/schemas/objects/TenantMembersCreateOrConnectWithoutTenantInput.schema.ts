import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersCreateWithoutTenantInputObjectSchema } from './TenantMembersCreateWithoutTenantInput.schema';
import { TenantMembersUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateOrConnectWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TenantMembersCreateWithoutTenantInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedCreateWithoutTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersCreateOrConnectWithoutTenantInputObjectSchema =
  Schema;
