import { z } from 'zod';
import { UserCreateWithoutGenderInputObjectSchema } from './UserCreateWithoutGenderInput.schema';
import { UserUncheckedCreateWithoutGenderInputObjectSchema } from './UserUncheckedCreateWithoutGenderInput.schema';
import { UserCreateOrConnectWithoutGenderInputObjectSchema } from './UserCreateOrConnectWithoutGenderInput.schema';
import { UserUpsertWithWhereUniqueWithoutGenderInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutGenderInput.schema';
import { UserCreateManyGenderInputEnvelopeObjectSchema } from './UserCreateManyGenderInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutGenderInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutGenderInput.schema';
import { UserUpdateManyWithWhereWithoutGenderInputObjectSchema } from './UserUpdateManyWithWhereWithoutGenderInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutGenderNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutGenderInputObjectSchema),
        z.lazy(() => UserCreateWithoutGenderInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutGenderInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutGenderInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutGenderInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutGenderInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutGenderInputObjectSchema),
        z
          .lazy(() => UserUpsertWithWhereUniqueWithoutGenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserCreateManyGenderInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutGenderInputObjectSchema),
        z
          .lazy(() => UserUpdateWithWhereUniqueWithoutGenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutGenderInputObjectSchema),
        z
          .lazy(() => UserUpdateManyWithWhereWithoutGenderInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutGenderNestedInputObjectSchema = Schema;
