import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterServiceOrderByRelationAggregateInputObjectSchema } from './MedicalCenterServiceOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateOrderByWithRelationInput> =
  z
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
      name: z.lazy(() => SortOrderSchema).optional(),
      dalilCode: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      services: z
        .lazy(
          () => MedicalCenterServiceOrderByRelationAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema =
  Schema;
