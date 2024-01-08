import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGenderInputObjectSchema } from './UserUpdateWithoutGenderInput.schema';
import { UserUncheckedUpdateWithoutGenderInputObjectSchema } from './UserUncheckedUpdateWithoutGenderInput.schema';
import { UserCreateWithoutGenderInputObjectSchema } from './UserCreateWithoutGenderInput.schema';
import { UserUncheckedCreateWithoutGenderInputObjectSchema } from './UserUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutGenderInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutGenderInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutGenderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutGenderInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutGenderInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithWhereUniqueWithoutGenderInputObjectSchema = Schema;
