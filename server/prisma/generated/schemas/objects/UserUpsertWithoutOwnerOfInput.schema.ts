import { z } from 'zod';
import { UserUpdateWithoutOwnerOfInputObjectSchema } from './UserUpdateWithoutOwnerOfInput.schema';
import { UserUncheckedUpdateWithoutOwnerOfInputObjectSchema } from './UserUncheckedUpdateWithoutOwnerOfInput.schema';
import { UserCreateWithoutOwnerOfInputObjectSchema } from './UserCreateWithoutOwnerOfInput.schema';
import { UserUncheckedCreateWithoutOwnerOfInputObjectSchema } from './UserUncheckedCreateWithoutOwnerOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutOwnerOfInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOwnerOfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOwnerOfInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOwnerOfInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutOwnerOfInputObjectSchema = Schema;
