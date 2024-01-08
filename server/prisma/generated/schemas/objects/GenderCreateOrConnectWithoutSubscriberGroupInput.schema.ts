import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderCreateWithoutSubscriberGroupInputObjectSchema } from './GenderCreateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => GenderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GenderCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GenderCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
