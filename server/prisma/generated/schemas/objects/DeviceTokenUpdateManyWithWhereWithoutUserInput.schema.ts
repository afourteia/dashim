import { z } from 'zod';
import { DeviceTokenScalarWhereInputObjectSchema } from './DeviceTokenScalarWhereInput.schema';
import { DeviceTokenUpdateManyMutationInputObjectSchema } from './DeviceTokenUpdateManyMutationInput.schema';
import { DeviceTokenUncheckedUpdateManyWithoutDeviceTokenInputObjectSchema } from './DeviceTokenUncheckedUpdateManyWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => DeviceTokenScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DeviceTokenUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DeviceTokenUncheckedUpdateManyWithoutDeviceTokenInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DeviceTokenUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
