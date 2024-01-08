import { z } from 'zod';
import { GenderCreateWithoutUserInputObjectSchema } from './GenderCreateWithoutUserInput.schema';
import { GenderUncheckedCreateWithoutUserInputObjectSchema } from './GenderUncheckedCreateWithoutUserInput.schema';
import { GenderCreateOrConnectWithoutUserInputObjectSchema } from './GenderCreateOrConnectWithoutUserInput.schema';
import { GenderUpsertWithoutUserInputObjectSchema } from './GenderUpsertWithoutUserInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './GenderWhereUniqueInput.schema';
import { GenderUpdateWithoutUserInputObjectSchema } from './GenderUpdateWithoutUserInput.schema';
import { GenderUncheckedUpdateWithoutUserInputObjectSchema } from './GenderUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUpdateOneWithoutUserNestedInput> = z
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
    upsert: z.lazy(() => GenderUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => GenderWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => GenderUpdateWithoutUserInputObjectSchema),
        z.lazy(() => GenderUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GenderUpdateOneWithoutUserNestedInputObjectSchema = Schema;
