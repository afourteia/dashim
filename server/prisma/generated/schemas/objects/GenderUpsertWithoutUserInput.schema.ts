import { z } from 'zod';
import { GenderUpdateWithoutUserInputObjectSchema } from './GenderUpdateWithoutUserInput.schema';
import { GenderUncheckedUpdateWithoutUserInputObjectSchema } from './GenderUncheckedUpdateWithoutUserInput.schema';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenderUpdateWithoutUserInputObjectSchema),
      z.lazy(() => GenderUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GenderCreateWithoutUserInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const GenderUpsertWithoutUserInputObjectSchema = Schema;
