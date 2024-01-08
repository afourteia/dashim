import { z } from 'zod';
import { GenderCreateWithoutSubscriberGroupInputObjectSchema } from './GenderCreateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedCreateWithoutSubscriberGroupInput.schema';
import { GenderCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './GenderCreateOrConnectWithoutSubscriberGroupInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateNestedOneWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenderCreateWithoutSubscriberGroupInputObjectSchema),
          z.lazy(
            () => GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => GenderCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const GenderCreateNestedOneWithoutSubscriberGroupInputObjectSchema =
  Schema;
