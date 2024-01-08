import { z } from 'zod';
import { TenantCreateWithoutTypeInputObjectSchema } from './TenantCreateWithoutTypeInput.schema';
import { TenantUncheckedCreateWithoutTypeInputObjectSchema } from './TenantUncheckedCreateWithoutTypeInput.schema';
import { TenantCreateOrConnectWithoutTypeInputObjectSchema } from './TenantCreateOrConnectWithoutTypeInput.schema';
import { TenantCreateManyTypeInputEnvelopeObjectSchema } from './TenantCreateManyTypeInputEnvelope.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedManyWithoutTypeInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TenantCreateWithoutTypeInputObjectSchema),
        z.lazy(() => TenantCreateWithoutTypeInputObjectSchema).array(),
        z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema),
        z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TenantCreateOrConnectWithoutTypeInputObjectSchema),
        z.lazy(() => TenantCreateOrConnectWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TenantCreateManyTypeInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TenantWhereUniqueInputObjectSchema),
        z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TenantCreateNestedManyWithoutTypeInputObjectSchema = Schema;
