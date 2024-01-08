import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersCreateWithoutMemberInputObjectSchema } from './TenantMembersCreateWithoutMemberInput.schema';
import { TenantMembersUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateOrConnectWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TenantMembersCreateWithoutMemberInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedCreateWithoutMemberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersCreateOrConnectWithoutMemberInputObjectSchema =
  Schema;
