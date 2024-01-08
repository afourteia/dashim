import { z } from 'zod';
import { DeviceTypeUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedUpdateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedUpdateWithoutDeviceTokenInput.schema';
import { DeviceTypeCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateWithoutDeviceTokenInput.schema';
import { DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema } from './DeviceTypeUncheckedCreateWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeUpsertWithoutDeviceTokenInput> = z
  .object({
    update: z.union([
      z.lazy(() => DeviceTypeUpdateWithoutDeviceTokenInputObjectSchema),
      z.lazy(
        () => DeviceTypeUncheckedUpdateWithoutDeviceTokenInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => DeviceTypeCreateWithoutDeviceTokenInputObjectSchema),
      z.lazy(
        () => DeviceTypeUncheckedCreateWithoutDeviceTokenInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const DeviceTypeUpsertWithoutDeviceTokenInputObjectSchema = Schema;
