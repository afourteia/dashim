import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintUpdateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerprintCreateWithoutFingerTypeInputObjectSchema } from './FingerprintCreateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpsertWithWhereUniqueWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FingerprintUpdateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerprintUncheckedUpdateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FingerprintCreateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema =
  Schema;
