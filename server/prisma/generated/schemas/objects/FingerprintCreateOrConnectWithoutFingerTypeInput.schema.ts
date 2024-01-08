import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './FingerprintWhereUniqueInput.schema';
import { FingerprintCreateWithoutFingerTypeInputObjectSchema } from './FingerprintCreateWithoutFingerTypeInput.schema';
import { FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintCreateOrConnectWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FingerprintCreateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerprintUncheckedCreateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintCreateOrConnectWithoutFingerTypeInputObjectSchema =
  Schema;
