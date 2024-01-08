import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithoutTenantInputObjectSchema } from './TenantMembersUpdateWithoutTenantInput.schema';
import { TenantMembersUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpdateWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMembersUpdateWithoutTenantInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedUpdateWithoutTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpdateWithWhereUniqueWithoutTenantInputObjectSchema =
  Schema;
