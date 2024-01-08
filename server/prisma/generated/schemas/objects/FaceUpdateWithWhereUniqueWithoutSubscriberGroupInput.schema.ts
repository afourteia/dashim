import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './FaceWhereUniqueInput.schema';
import { FaceUpdateWithoutSubscriberGroupInputObjectSchema } from './FaceUpdateWithoutSubscriberGroupInput.schema';
import { FaceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './FaceUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FaceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FaceUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () => FaceUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
