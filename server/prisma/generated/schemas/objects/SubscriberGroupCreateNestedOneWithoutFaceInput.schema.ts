import { z } from 'zod';
import { SubscriberGroupCreateWithoutFaceInputObjectSchema } from './SubscriberGroupCreateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFaceInput.schema';
import { SubscriberGroupCreateOrConnectWithoutFaceInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutFaceInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutFaceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutFaceInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubscriberGroupCreateOrConnectWithoutFaceInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutFaceInputObjectSchema =
  Schema;
