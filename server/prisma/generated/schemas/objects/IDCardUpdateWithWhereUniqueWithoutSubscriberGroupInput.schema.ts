import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutSubscriberGroupInputObjectSchema } from './IDCardUpdateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => IDCardUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => IDCardUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const IDCardUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
