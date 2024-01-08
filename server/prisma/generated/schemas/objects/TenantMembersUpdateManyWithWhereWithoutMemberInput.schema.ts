import { z } from 'zod';
import { TenantMembersScalarWhereInputObjectSchema } from './TenantMembersScalarWhereInput.schema';
import { TenantMembersUpdateManyMutationInputObjectSchema } from './TenantMembersUpdateManyMutationInput.schema';
import { TenantMembersUncheckedUpdateManyWithoutMemberOfInputObjectSchema } from './TenantMembersUncheckedUpdateManyWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpdateManyWithWhereWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMembersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TenantMembersUncheckedUpdateManyWithoutMemberOfInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpdateManyWithWhereWithoutMemberInputObjectSchema =
  Schema;
