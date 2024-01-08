import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCreateWithoutUserInputObjectSchema } from './DeviceTokenCreateWithoutUserInput.schema';
import { DeviceTokenUncheckedCreateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema),
      z.lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DeviceTokenCreateOrConnectWithoutUserInputObjectSchema = Schema;
