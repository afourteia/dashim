import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintUpdateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateWithWhereUniqueWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintUpdateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerprintUncheckedUpdateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema =
  Schema;
