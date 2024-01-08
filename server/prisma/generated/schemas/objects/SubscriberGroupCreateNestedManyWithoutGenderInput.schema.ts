import { z } from 'zod';
import { SubscriberGroupCreateWithoutGenderInputObjectSchema } from './SubscriberGroupCreateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutGenderInput.schema';
import { SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutGenderInput.schema';
import { SubscriberGroupCreateManyGenderInputEnvelopeObjectSchema } from './SubscriberGroupCreateManyGenderInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedManyWithoutGenderInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema),
          z
            .lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupCreateOrConnectWithoutGenderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberGroupCreateManyGenderInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedManyWithoutGenderInputObjectSchema =
  Schema;
