import { z } from 'zod';
import { DeviceTypeWhereInputObjectSchema } from './DeviceTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => DeviceTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DeviceTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DeviceTypeRelationFilterObjectSchema = Schema;
