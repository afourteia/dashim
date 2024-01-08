import { z } from 'zod';
import { IDCardScalarWhereInputObjectSchema } from './IDCardScalarWhereInput.schema';
import { IDCardUpdateManyMutationInputObjectSchema } from './IDCardUpdateManyMutationInput.schema';
import { IDCardUncheckedUpdateManyWithoutIdCardInputObjectSchema } from './IDCardUncheckedUpdateManyWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateManyWithWhereWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => IDCardScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => IDCardUpdateManyMutationInputObjectSchema),
        z.lazy(() => IDCardUncheckedUpdateManyWithoutIdCardInputObjectSchema),
      ]),
    })
    .strict();

export const IDCardUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema =
  Schema;
