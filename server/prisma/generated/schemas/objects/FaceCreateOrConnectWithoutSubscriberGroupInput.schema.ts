import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceCreateWithoutSubscriberGroupInputObjectSchema } from './FaceCreateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FaceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
