import { z } from 'zod';
import { FingerTypeWhereUniqueInputObjectSchema } from './FingerTypeWhereUniqueInput.schema';
import { FingerTypeCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeCreateOrConnectWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerTypeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FingerTypeCreateWithoutFingerTypeInputObjectSchema),
        z.lazy(
          () => FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerTypeCreateOrConnectWithoutFingerTypeInputObjectSchema =
  Schema;
