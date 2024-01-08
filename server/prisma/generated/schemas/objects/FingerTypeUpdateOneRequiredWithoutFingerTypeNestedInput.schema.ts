import { z } from 'zod';
import { FingerTypeCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerTypeCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerTypeCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerTypeUpsertWithoutFingerTypeInputObjectSchema } from './FingerTypeUpsertWithoutFingerTypeInput.schema';
import { FingerTypeWhereUniqueInputObjectSchema } from './FingerTypeWhereUniqueInput.schema';
import { FingerTypeUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeUpdateWithoutFingerTypeInput.schema';
import { FingerTypeUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerTypeUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerTypeUpdateOneRequiredWithoutFingerTypeNestedInput> =
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
      upsert: z
        .lazy(() => FingerTypeUpsertWithoutFingerTypeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FingerTypeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FingerTypeUpdateWithoutFingerTypeInputObjectSchema),
          z.lazy(
            () => FingerTypeUncheckedUpdateWithoutFingerTypeInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const FingerTypeUpdateOneRequiredWithoutFingerTypeNestedInputObjectSchema =
  Schema;
