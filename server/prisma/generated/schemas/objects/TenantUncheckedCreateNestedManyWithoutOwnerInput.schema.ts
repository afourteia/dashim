import { z } from 'zod';
import { TenantCreateWithoutOwnerInputObjectSchema } from './TenantCreateWithoutOwnerInput.schema';
import { TenantUncheckedCreateWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateWithoutOwnerInput.schema';
import { TenantCreateOrConnectWithoutOwnerInputObjectSchema } from './TenantCreateOrConnectWithoutOwnerInput.schema';
import { TenantCreateManyOwnerInputEnvelopeObjectSchema } from './TenantCreateManyOwnerInputEnvelope.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedCreateNestedManyWithoutOwnerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutOwnerInputObjectSchema),
          z.lazy(() => TenantCreateWithoutOwnerInputObjectSchema).array(),
          z.lazy(() => TenantUncheckedCreateWithoutOwnerInputObjectSchema),
          z
            .lazy(() => TenantUncheckedCreateWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TenantCreateOrConnectWithoutOwnerInputObjectSchema),
          z
            .lazy(() => TenantCreateOrConnectWithoutOwnerInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantCreateManyOwnerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantWhereUniqueInputObjectSchema),
          z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantUncheckedCreateNestedManyWithoutOwnerInputObjectSchema =
  Schema;
