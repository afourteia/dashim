import { z } from 'zod';
import { DeviceTokenUserIdNameCompoundUniqueInputObjectSchema } from './DeviceTokenUserIdNameCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_name: z
      .lazy(() => DeviceTokenUserIdNameCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTokenWhereUniqueInputObjectSchema = Schema;
