import { z } from 'zod';
import { TenantMembersScalarWhereInputObjectSchema } from './TenantMembersScalarWhereInput.schema';
import { TenantMembersUpdateManyMutationInputObjectSchema } from './TenantMembersUpdateManyMutationInput.schema';
import { TenantMembersUncheckedUpdateManyWithoutMembersInputObjectSchema } from './TenantMembersUncheckedUpdateManyWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpdateManyWithWhereWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMembersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedUpdateManyWithoutMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpdateManyWithWhereWithoutTenantInputObjectSchema =
  Schema;
