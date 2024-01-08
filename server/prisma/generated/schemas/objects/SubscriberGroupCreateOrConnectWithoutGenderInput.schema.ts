import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutGenderInputObjectSchema } from './SubscriberGroupCreateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema =
  Schema;
