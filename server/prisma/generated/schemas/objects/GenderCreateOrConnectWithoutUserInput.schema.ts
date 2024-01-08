import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => GenderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GenderCreateWithoutUserInputObjectSchema),
      z.lazy(() => GenderUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const GenderCreateOrConnectWithoutUserInputObjectSchema = Schema;
