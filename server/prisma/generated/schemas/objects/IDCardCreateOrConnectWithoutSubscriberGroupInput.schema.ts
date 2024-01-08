import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
