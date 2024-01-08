import { z } from 'zod';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';
import { TenantCreateOrConnectWithoutMembersInputObjectSchema } from './TenantCreateOrConnectWithoutMembersInput.schema';
import { TenantUpsertWithoutMembersInputObjectSchema } from './TenantUpsertWithoutMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutMembersInputObjectSchema } from './TenantUpdateWithoutMembersInput.schema';
import { TenantUncheckedUpdateWithoutMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutMembersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
          z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantCreateOrConnectWithoutMembersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TenantUpsertWithoutMembersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TenantUpdateWithoutMembersInputObjectSchema),
          z.lazy(() => TenantUncheckedUpdateWithoutMembersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TenantUpdateOneRequiredWithoutMembersNestedInputObjectSchema =
  Schema;
