import { z } from 'zod';
import { DeviceTokenCreateManyUserInputObjectSchema } from './DeviceTokenCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DeviceTokenCreateManyUserInputObjectSchema),
      z.lazy(() => DeviceTokenCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DeviceTokenCreateManyUserInputEnvelopeObjectSchema = Schema;
