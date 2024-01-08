import { z } from 'zod';
import { SubscriberInstitutionIdIdCompoundUniqueInputObjectSchema } from './SubscriberInstitutionIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    institutionId_id: z
      .lazy(() => SubscriberInstitutionIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberWhereUniqueInputObjectSchema = Schema;
