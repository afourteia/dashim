import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenUserIdNameCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    name: z.string(),
  })
  .strict();

export const DeviceTokenUserIdNameCompoundUniqueInputObjectSchema = Schema;
