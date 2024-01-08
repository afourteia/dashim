import { z } from 'zod';
import { SubscriberGroupCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutIdCardInput.schema';
import { SubscriberGroupCreateOrConnectWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutIdCardInput.schema';
import { SubscriberGroupUpsertWithoutIdCardInputObjectSchema } from './SubscriberGroupUpsertWithoutIdCardInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutIdCardInputObjectSchema } from './SubscriberGroupUpdateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutIdCardNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutIdCardInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriberGroupCreateOrConnectWithoutIdCardInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutIdCardInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => SubscriberGroupUpdateWithoutIdCardInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedUpdateWithoutIdCardInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutIdCardNestedInputObjectSchema =
  Schema;
