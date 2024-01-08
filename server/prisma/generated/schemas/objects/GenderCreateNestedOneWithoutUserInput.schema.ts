import { z } from 'zod';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';
import { GenderCreateOrConnectWithoutUserInputObjectSchema } from './GenderCreateOrConnectWithoutUserInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GenderCreateWithoutUserInputObjectSchema),
        z.lazy(() => GenderUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GenderCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GenderCreateNestedOneWithoutUserInputObjectSchema = Schema;
