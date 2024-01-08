import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VoiceCountOrderByAggregateInputObjectSchema } from './VoiceCountOrderByAggregateInput.schema';
import { VoiceMaxOrderByAggregateInputObjectSchema } from './VoiceMaxOrderByAggregateInput.schema';
import { VoiceMinOrderByAggregateInputObjectSchema } from './VoiceMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    voiceHash: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VoiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => VoiceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VoiceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VoiceOrderByWithAggregationInputObjectSchema = Schema;
