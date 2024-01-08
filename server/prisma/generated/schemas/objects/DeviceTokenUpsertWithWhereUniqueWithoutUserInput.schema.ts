import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithoutUserInputObjectSchema } from './DeviceTokenUpdateWithoutUserInput.schema';
import { DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedUpdateWithoutUserInput.schema';
import { DeviceTokenCreateWithoutUserInputObjectSchema } from './DeviceTokenCreateWithoutUserInput.schema';
import { DeviceTokenUncheckedCreateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DeviceTokenUpdateWithoutUserInputObjectSchema),
        z.lazy(() => DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema),
        z.lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const DeviceTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
