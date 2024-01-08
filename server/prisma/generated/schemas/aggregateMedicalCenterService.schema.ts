import { z } from 'zod';
import { MedicalCenterServiceOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterServiceOrderByWithRelationInput.schema';
import { MedicalCenterServiceWhereInputObjectSchema } from './objects/MedicalCenterServiceWhereInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCountAggregateInputObjectSchema } from './objects/MedicalCenterServiceCountAggregateInput.schema';
import { MedicalCenterServiceMinAggregateInputObjectSchema } from './objects/MedicalCenterServiceMinAggregateInput.schema';
import { MedicalCenterServiceMaxAggregateInputObjectSchema } from './objects/MedicalCenterServiceMaxAggregateInput.schema';

export const MedicalCenterServiceAggregateSchema = z.object({
  orderBy: z
    .union([
      MedicalCenterServiceOrderByWithRelationInputObjectSchema,
      MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
  cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      MedicalCenterServiceCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: MedicalCenterServiceMinAggregateInputObjectSchema.optional(),
  _max: MedicalCenterServiceMaxAggregateInputObjectSchema.optional(),
});
