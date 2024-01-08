import { z } from 'zod';
import { FingerprintScalarWhereInputObjectSchema } from './FingerprintScalarWhereInput.schema';
import { FingerprintUpdateManyMutationInputObjectSchema } from './FingerprintUpdateManyMutationInput.schema';
import { FingerprintUncheckedUpdateManyWithoutFingerTypeInputObjectSchema } from './FingerprintUncheckedUpdateManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateManyWithWhereWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedUpdateManyWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpdateManyWithWhereWithoutFingerTypeInputObjectSchema =
  Schema;
