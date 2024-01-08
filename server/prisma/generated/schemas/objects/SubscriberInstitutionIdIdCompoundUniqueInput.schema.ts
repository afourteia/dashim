import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberInstitutionIdIdCompoundUniqueInput> = z
  .object({
    institutionId: z.string(),
    id: z.string(),
  })
  .strict();

export const SubscriberInstitutionIdIdCompoundUniqueInputObjectSchema = Schema;
