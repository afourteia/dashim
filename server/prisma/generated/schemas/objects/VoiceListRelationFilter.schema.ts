import { z } from 'zod';
import { VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceListRelationFilter> = z
  .object({
    every: z.lazy(() => VoiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => VoiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => VoiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const VoiceListRelationFilterObjectSchema = Schema;
