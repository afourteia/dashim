import { z } from 'zod';
import { FaceCreateWithoutSubscriberGroupInputObjectSchema } from './FaceCreateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './FaceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { FaceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './FaceCreateManySubscriberGroupInputEnvelope.schema';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateNestedManyWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema),
          z
            .lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema)
            .array(),
          z.lazy(
            () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FaceCreateManySubscriberGroupInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FaceWhereUniqueInputObjectSchema),
          z.lazy(() => FaceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FaceCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
