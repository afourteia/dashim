import { z } from 'zod';
import { DeviceTokenCreateManyDeviceTypeInputObjectSchema } from './DeviceTokenCreateManyDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateManyDeviceTypeInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DeviceTokenCreateManyDeviceTypeInputObjectSchema),
      z.lazy(() => DeviceTokenCreateManyDeviceTypeInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DeviceTokenCreateManyDeviceTypeInputEnvelopeObjectSchema = Schema;
