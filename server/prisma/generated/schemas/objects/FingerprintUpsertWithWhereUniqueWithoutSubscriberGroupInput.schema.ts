import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUpdateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { FingerprintCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FingerprintUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FingerprintCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
