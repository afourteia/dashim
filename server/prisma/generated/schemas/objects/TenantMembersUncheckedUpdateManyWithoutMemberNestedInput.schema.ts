import { z } from 'zod';
import { TenantMembersCreateWithoutMemberInputObjectSchema } from './TenantMembersCreateWithoutMemberInput.schema';
import { TenantMembersUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMembersUncheckedCreateWithoutMemberInput.schema';
import { TenantMembersCreateOrConnectWithoutMemberInputObjectSchema } from './TenantMembersCreateOrConnectWithoutMemberInput.schema';
import { TenantMembersUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './TenantMembersUpsertWithWhereUniqueWithoutMemberInput.schema';
import { TenantMembersCreateManyMemberInputEnvelopeObjectSchema } from './TenantMembersCreateManyMemberInputEnvelope.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './TenantMembersUpdateWithWhereUniqueWithoutMemberInput.schema';
import { TenantMembersUpdateManyWithWhereWithoutMemberInputObjectSchema } from './TenantMembersUpdateManyWithWhereWithoutMemberInput.schema';
import { TenantMembersScalarWhereInputObjectSchema } from './TenantMembersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUncheckedUpdateManyWithoutMemberNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              TenantMembersUpsertWithWhereUniqueWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpsertWithWhereUniqueWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantMembersCreateManyMemberInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TenantMembersUpdateWithWhereUniqueWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpdateWithWhereUniqueWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TenantMembersUpdateManyWithWhereWithoutMemberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpdateManyWithWhereWithoutMemberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TenantMembersScalarWhereInputObjectSchema),
          z.lazy(() => TenantMembersScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantMembersUncheckedUpdateManyWithoutMemberNestedInputObjectSchema =
  Schema;
