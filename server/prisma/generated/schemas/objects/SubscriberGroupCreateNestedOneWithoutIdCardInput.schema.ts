import { z } from 'zod';
import { SubscriberGroupCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutIdCardInput.schema';
import { SubscriberGroupCreateOrConnectWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutIdCardInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutIdCardInput> =
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
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutIdCardInputObjectSchema =
  Schema;
