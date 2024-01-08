import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceUpdateWithoutSubscriberGroupInputObjectSchema } from './FaceUpdateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { FaceCreateWithoutSubscriberGroupInputObjectSchema } from './FaceCreateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FaceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FaceUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => FaceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FaceCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => FaceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
