import { z } from 'zod';
import { SubscriberGroupCreateWithoutFaceInputObjectSchema } from './SubscriberGroupCreateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedCreateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutFaceInput.schema';
import { SubscriberGroupCreateOrConnectWithoutFaceInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutFaceInput.schema';
import { SubscriberGroupUpsertWithoutFaceInputObjectSchema } from './SubscriberGroupUpsertWithoutFaceInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutFaceInputObjectSchema } from './SubscriberGroupUpdateWithoutFaceInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutFaceInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutFaceNestedInput> =
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
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutFaceInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => SubscriberGroupUpdateWithoutFaceInputObjectSchema),
          z.lazy(
            () => SubscriberGroupUncheckedUpdateWithoutFaceInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutFaceNestedInputObjectSchema =
  Schema;
