import { z } from 'zod';
import { TenantMembersCreateWithoutTenantInputObjectSchema } from './TenantMembersCreateWithoutTenantInput.schema';
import { TenantMembersUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedCreateWithoutTenantInput.schema';
import { TenantMembersCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMembersCreateOrConnectWithoutTenantInput.schema';
import { TenantMembersUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMembersUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantMembersCreateManyTenantInputEnvelopeObjectSchema } from './TenantMembersCreateManyTenantInputEnvelope.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';
import { TenantMembersUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMembersUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantMembersUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantMembersUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantMembersScalarWhereInputObjectSchema } from './TenantMembersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUpdateManyWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantMembersCreateWithoutTenantInputObjectSchema),
          z
            .lazy(() => TenantMembersCreateWithoutTenantInputObjectSchema)
            .array(),
          z.lazy(
            () => TenantMembersUncheckedCreateWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMembersUncheckedCreateWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TenantMembersCreateOrConnectWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TenantMembersCreateOrConnectWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TenantMembersUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantMembersCreateManyTenantInputEnvelopeObjectSchema)
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
              TenantMembersUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TenantMembersUpdateManyWithWhereWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TenantMembersUpdateManyWithWhereWithoutTenantInputObjectSchema,
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

export const TenantMembersUpdateManyWithoutTenantNestedInputObjectSchema =
  Schema;
