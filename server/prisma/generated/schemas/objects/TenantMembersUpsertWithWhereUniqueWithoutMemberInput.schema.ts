import { z } from 'zod';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithoutMemberInputObjectSchema } from './TenantMembersUpdateWithoutMemberInput.schema';
import { TenantMembersUncheckedUpdateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedUpdateWithoutMemberInput.schema';
import { TenantMembersCreateWithoutMemberInputObjectSchema } from './TenantMembersCreateWithoutMemberInput.schema';
import { TenantMembersUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpsertWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TenantMembersUpdateWithoutMemberInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedUpdateWithoutMemberInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TenantMembersCreateWithoutMemberInputObjectSchema),
        z.lazy(
          () => TenantMembersUncheckedCreateWithoutMemberInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMembersUpsertWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema;
