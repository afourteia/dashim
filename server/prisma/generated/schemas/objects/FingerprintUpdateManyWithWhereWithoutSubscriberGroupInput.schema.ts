import { z } from 'zod';
import { FingerprintScalarWhereInputObjectSchema } from './FingerprintScalarWhereInput.schema';
import { FingerprintUpdateManyMutationInputObjectSchema } from './FingerprintUpdateManyMutationInput.schema';
import { FingerprintUncheckedUpdateManyWithoutFingerprintInputObjectSchema } from './FingerprintUncheckedUpdateManyWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpdateManyWithWhereWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FingerprintScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FingerprintUncheckedUpdateManyWithoutFingerprintInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema =
  Schema;
