import { z } from 'zod';
import { IDCardCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateWithoutSubscriberGroupInput.schema';
import { IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './IDCardUncheckedCreateWithoutSubscriberGroupInput.schema';
import { IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './IDCardCreateOrConnectWithoutSubscriberGroupInput.schema';
import { IDCardCreateManySubscriberGroupInputEnvelopeObjectSchema } from './IDCardCreateManySubscriberGroupInputEnvelope.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateNestedManyWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema),
          z
            .lazy(() => IDCardCreateWithoutSubscriberGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                IDCardCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => IDCardCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => IDCardWhereUniqueInputObjectSchema),
          z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IDCardCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
