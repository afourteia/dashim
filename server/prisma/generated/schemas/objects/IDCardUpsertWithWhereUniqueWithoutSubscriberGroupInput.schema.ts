import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutSubscriberGroupInputObjectSchema } from './IDCardUpdateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { IDCardCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => IDCardUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => IDCardUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const IDCardUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
