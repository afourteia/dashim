import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithoutTenantInputObjectSchema } from './TenantMembersUpdateWithoutTenantInput.schema';
import { TenantMembersUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedUpdateWithoutTenantInput.schema';
import { TenantMembersCreateWithoutTenantInputObjectSchema } from './TenantMembersCreateWithoutTenantInput.schema';
import { TenantMembersUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpsertWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TenantMembersUpdateWithoutTenantInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedUpdateWithoutTenantInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TenantMembersCreateWithoutTenantInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedCreateWithoutTenantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpsertWithWhereUniqueWithoutTenantInputObjectSchema =
  Schema;
