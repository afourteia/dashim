import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUpdateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
