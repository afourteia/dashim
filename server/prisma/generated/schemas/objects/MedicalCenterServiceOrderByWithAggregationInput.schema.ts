import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterServiceCountOrderByAggregateInputObjectSchema } from './MedicalCenterServiceCountOrderByAggregateInput.schema';
import { MedicalCenterServiceMaxOrderByAggregateInputObjectSchema } from './MedicalCenterServiceMaxOrderByAggregateInput.schema';
import { MedicalCenterServiceMinOrderByAggregateInputObjectSchema } from './MedicalCenterServiceMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceOrderByWithAggregationInput> =
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
      medicalCenterCode: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
      templateId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => MedicalCenterServiceCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => MedicalCenterServiceMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => MedicalCenterServiceMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterServiceOrderByWithAggregationInputObjectSchema =
  Schema;
