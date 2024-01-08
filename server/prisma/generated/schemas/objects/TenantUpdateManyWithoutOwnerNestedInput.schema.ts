import { z } from 'zod';
import { TenantCreateWithoutOwnerInputObjectSchema } from './TenantCreateWithoutOwnerInput.schema';
import { TenantUncheckedCreateWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateWithoutOwnerInput.schema';
import { TenantCreateOrConnectWithoutOwnerInputObjectSchema } from './TenantCreateOrConnectWithoutOwnerInput.schema';
import { TenantUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './TenantUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { TenantCreateManyOwnerInputEnvelopeObjectSchema } from './TenantCreateManyOwnerInputEnvelope.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './TenantUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { TenantUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './TenantUpdateManyWithWhereWithoutOwnerInput.schema';
import { TenantScalarWhereInputObjectSchema } from './TenantScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateManyWithoutOwnerNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => TenantUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TenantUpsertWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TenantCreateManyOwnerInputEnvelopeObjectSchema)
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
        z.lazy(() => TenantUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TenantUpdateWithWhereUniqueWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TenantUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z
          .lazy(() => TenantUpdateManyWithWhereWithoutOwnerInputObjectSchema)
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

export const TenantUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
