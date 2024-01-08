import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintCreateWithoutSubscriberGroupInput.schema';
import { FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './FingerprintUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FingerprintCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
