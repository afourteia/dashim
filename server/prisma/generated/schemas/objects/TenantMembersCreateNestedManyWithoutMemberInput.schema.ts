import { z } from 'zod';
import { TenantMembersCreateWithoutMemberInputObjectSchema } from './TenantMembersCreateWithoutMemberInput.schema';
import { TenantMembersUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedCreateWithoutMemberInput.schema';
import { TenantMembersCreateOrConnectWithoutMemberInputObjectSchema } from './TenantMembersCreateOrConnectWithoutMemberInput.schema';
import { TenantMembersCreateManyMemberInputEnvelopeObjectSchema } from './TenantMembersCreateManyMemberInputEnvelope.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersCreateNestedManyWithoutMemberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantMembersCreateWithoutMemberInputObjectSchema),
          z
            .lazy(() => TenantMembersCreateWithoutMemberInputObjectSchema)
            .array(),
          z.lazy(
            () => TenantMembersUncheckedCreateWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMembersUncheckedCreateWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TenantMembersCreateOrConnectWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMembersCreateOrConnectWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantMembersCreateManyMemberInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantMembersCreateNestedManyWithoutMemberInputObjectSchema =
  Schema;
