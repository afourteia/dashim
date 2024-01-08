import { z } from 'zod';
import { DeviceTypeCreateNestedOneWithoutDeviceTokenInputObjectSchema } from './DeviceTypeCreateNestedOneWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateWithoutUserInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    deviceType: z.lazy(
      () => DeviceTypeCreateNestedOneWithoutDeviceTokenInputObjectSchema,
    ),
  })
  .strict();

export const DeviceTokenCreateWithoutUserInputObjectSchema = Schema;
