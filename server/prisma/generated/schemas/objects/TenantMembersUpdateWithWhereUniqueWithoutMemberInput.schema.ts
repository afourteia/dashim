import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithoutMemberInputObjectSchema } from './TenantMembersUpdateWithoutMemberInput.schema';
import { TenantMembersUncheckedUpdateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedUpdateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpdateWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMembersUpdateWithoutMemberInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedUpdateWithoutMemberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpdateWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema;
