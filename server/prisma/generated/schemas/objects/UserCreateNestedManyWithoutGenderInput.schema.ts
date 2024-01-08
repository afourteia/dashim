import { z } from 'zod';
import { UserCreateWithoutGenderInputObjectSchema } from './UserCreateWithoutGenderInput.schema';
import { UserUncheckedCreateWithoutGenderInputObjectSchema } from './UserUncheckedCreateWithoutGenderInput.schema';
import { UserCreateOrConnectWithoutGenderInputObjectSchema } from './UserCreateOrConnectWithoutGenderInput.schema';
import { UserCreateManyGenderInputEnvelopeObjectSchema } from './UserCreateManyGenderInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutGenderInput> = z
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
    createMany: z
      .lazy(() => UserCreateManyGenderInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateNestedManyWithoutGenderInputObjectSchema = Schema;
