import { z } from 'zod';
import { DeviceTokenCreateNestedManyWithoutDeviceTypeInputObjectSchema } from './DeviceTokenCreateNestedManyWithoutDeviceTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    deviceToken: z
      .lazy(() => DeviceTokenCreateNestedManyWithoutDeviceTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTypeCreateInputObjectSchema = Schema;
