import { z } from 'zod';
import { TenantCreateWithoutTypeInputObjectSchema } from './TenantCreateWithoutTypeInput.schema';
import { TenantUncheckedCreateWithoutTypeInputObjectSchema } from './TenantUncheckedCreateWithoutTypeInput.schema';
import { TenantCreateOrConnectWithoutTypeInputObjectSchema } from './TenantCreateOrConnectWithoutTypeInput.schema';
import { TenantUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './TenantUpsertWithWhereUniqueWithoutTypeInput.schema';
import { TenantCreateManyTypeInputEnvelopeObjectSchema } from './TenantCreateManyTypeInputEnvelope.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './TenantUpdateWithWhereUniqueWithoutTypeInput.schema';
import { TenantUpdateManyWithWhereWithoutTypeInputObjectSchema } from './TenantUpdateManyWithWhereWithoutTypeInput.schema';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUncheckedUpdateManyWithoutTypeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutTypeInputObjectSchema),
          z.lazy(() => TenantCreateWithoutTypeInputObjectSchema).array(),
          z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema),
          z
            .lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TenantCreateOrConnectWithoutTypeInputObjectSchema),
          z
            .lazy(() => TenantCreateOrConnectWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TenantUpsertWithWhereUniqueWithoutTypeInputObjectSchema),
          z
            .lazy(() => TenantUpsertWithWhereUniqueWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TenantCreateManyTypeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TenantWhereUniqueInputObjectSchema),
          z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TenantWhereUniqueInputObjectSchema),
          z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TenantWhereUniqueInputObjectSchema),
          z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TenantWhereUniqueInputObjectSchema),
          z.lazy(() => TenantWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TenantUpdateWithWhereUniqueWithoutTypeInputObjectSchema),
          z
            .lazy(() => TenantUpdateWithWhereUniqueWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TenantUpdateManyWithWhereWithoutTypeInputObjectSchema),
          z
            .lazy(() => TenantUpdateManyWithWhereWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TenantScalarWhereInputObjectSchema),
          z.lazy(() => TenantScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TenantUncheckedUpdateManyWithoutTypeNestedInputObjectSchema =
  Schema;
