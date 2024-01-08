import { z } from 'zod';
import { DeviceTokenWhereInputObjectSchema } from './DeviceTokenWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenListRelationFilter> = z
  .object({
    every: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
    some: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
    none: z.lazy(() => DeviceTokenWhereInputObjectSchema).optional(),
  })
  .strict();

export const DeviceTokenListRelationFilterObjectSchema = Schema;
