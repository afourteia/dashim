import { z } from 'zod';
import { FingerTypeCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerTypeCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerTypeWhereUniqueInputObjectSchema } from './FingerTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeCreateNestedOneWithoutFingerTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FingerTypeCreateWithoutFingerTypeInputObjectSchema),
          z.lazy(
            () => FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FingerTypeCreateOrConnectWithoutFingerTypeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FingerTypeWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const FingerTypeCreateNestedOneWithoutFingerTypeInputObjectSchema =
  Schema;
