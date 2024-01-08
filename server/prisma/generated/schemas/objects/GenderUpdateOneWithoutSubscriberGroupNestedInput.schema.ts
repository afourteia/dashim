import { z } from 'zod';
import { GenderCreateWithoutSubscriberGroupInputObjectSchema } from './GenderCreateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedCreateWithoutSubscriberGroupInput.schema';
import { GenderCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './GenderCreateOrConnectWithoutSubscriberGroupInput.schema';
import { GenderUpsertWithoutSubscriberGroupInputObjectSchema } from './GenderUpsertWithoutSubscriberGroupInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderUpdateWithoutSubscriberGroupInputObjectSchema } from './GenderUpdateWithoutSubscriberGroupInput.schema';
import { GenderUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './GenderUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateOneWithoutSubscriberGroupNestedInput> =
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
      upsert: z
        .lazy(() => GenderUpsertWithoutSubscriberGroupInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GenderUpdateWithoutSubscriberGroupInputObjectSchema),
          z.lazy(
            () => GenderUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const GenderUpdateOneWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
