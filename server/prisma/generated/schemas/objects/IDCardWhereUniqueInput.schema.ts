import { z } from 'zod';
import { IDCardSubscriberGroupIdIdCompoundUniqueInputObjectSchema } from './IDCardSubscriberGroupIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriberGroupId_id: z
      .lazy(() => IDCardSubscriberGroupIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const IDCardWhereUniqueInputObjectSchema = Schema;
