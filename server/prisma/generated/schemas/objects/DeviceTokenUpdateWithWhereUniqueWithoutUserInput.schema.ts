import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenUpdateWithoutUserInputObjectSchema } from './DeviceTokenUpdateWithoutUserInput.schema';
import { DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DeviceTokenUpdateWithoutUserInputObjectSchema),
        z.lazy(() => DeviceTokenUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const DeviceTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
