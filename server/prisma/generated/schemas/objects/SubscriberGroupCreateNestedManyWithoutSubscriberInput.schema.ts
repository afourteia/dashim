import { z } from 'zod';
import { SubscriberGroupCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateWithoutSubscriberInput.schema';
import { SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutSubscriberInput.schema';
import { SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutSubscriberInput.schema';
import { SubscriberGroupCreateManySubscriberInputEnvelopeObjectSchema } from './SubscriberGroupCreateManySubscriberInputEnvelope.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedManyWithoutSubscriberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema),
          z
            .lazy(() => SubscriberGroupCreateWithoutSubscriberInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupUncheckedCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupCreateOrConnectWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => SubscriberGroupCreateManySubscriberInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedManyWithoutSubscriberInputObjectSchema =
  Schema;
