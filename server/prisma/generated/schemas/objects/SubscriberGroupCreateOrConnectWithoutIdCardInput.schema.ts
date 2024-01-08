import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateWithoutIdCardInput.schema';
import { SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutIdCardInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutIdCardInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutIdCardInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutIdCardInputObjectSchema =
  Schema;
