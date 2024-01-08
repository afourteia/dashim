import { z } from 'zod';
import { UserCreateNestedOneWithoutDeviceTokenInputObjectSchema } from './UserCreateNestedOneWithoutDeviceTokenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateWithoutDeviceTypeInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutDeviceTokenInputObjectSchema),
  })
  .strict();

export const DeviceTokenCreateWithoutDeviceTypeInputObjectSchema = Schema;
