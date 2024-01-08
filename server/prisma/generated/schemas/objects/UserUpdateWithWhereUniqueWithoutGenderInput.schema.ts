import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGenderInputObjectSchema } from './UserUpdateWithoutGenderInput.schema';
import { UserUncheckedUpdateWithoutGenderInputObjectSchema } from './UserUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutGenderInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutGenderInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutGenderInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpdateWithWhereUniqueWithoutGenderInputObjectSchema = Schema;
