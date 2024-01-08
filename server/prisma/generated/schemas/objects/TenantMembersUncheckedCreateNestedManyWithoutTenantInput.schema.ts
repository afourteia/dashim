import { z } from 'zod';
import { TenantMembersCreateWithoutTenantInputObjectSchema } from './TenantMembersCreateWithoutTenantInput.schema';
import { TenantMembersUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMembersUncheckedCreateWithoutTenantInput.schema';
import { TenantMembersCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMembersCreateOrConnectWithoutTenantInput.schema';
import { TenantMembersCreateManyTenantInputEnvelopeObjectSchema } from './TenantMembersCreateManyTenantInputEnvelope.schema';
import { TenantMembersWhereUniqueInputObjectSchema } from './TenantMembersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMembersUncheckedCreateNestedManyWithoutTenantInput> =
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
      createMany: z
        .lazy(() => TenantMembersCreateManyTenantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema),
          z.lazy(() => TenantMembersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantMembersUncheckedCreateNestedManyWithoutTenantInputObjectSchema =
  Schema;
