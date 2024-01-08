import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutFaceInputObjectSchema } from './SubscriberGroupCreateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutFaceInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutFaceInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutFaceInputObjectSchema =
  Schema;
