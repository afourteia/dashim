import { z } from 'zod';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterOrderByWithRelationInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './objects/MedicalCenterWhereInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCountAggregateInputObjectSchema } from './objects/MedicalCenterCountAggregateInput.schema';
import { MedicalCenterMinAggregateInputObjectSchema } from './objects/MedicalCenterMinAggregateInput.schema';
import { MedicalCenterMaxAggregateInputObjectSchema } from './objects/MedicalCenterMaxAggregateInput.schema';
import { MedicalCenterAvgAggregateInputObjectSchema } from './objects/MedicalCenterAvgAggregateInput.schema';
import { MedicalCenterSumAggregateInputObjectSchema } from './objects/MedicalCenterSumAggregateInput.schema';

export const MedicalCenterAggregateSchema = z.object({
  orderBy: z
    .union([
      MedicalCenterOrderByWithRelationInputObjectSchema,
      MedicalCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterWhereInputObjectSchema.optional(),
  cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MedicalCenterCountAggregateInputObjectSchema])
    .optional(),
  _min: MedicalCenterMinAggregateInputObjectSchema.optional(),
  _max: MedicalCenterMaxAggregateInputObjectSchema.optional(),
  _avg: MedicalCenterAvgAggregateInputObjectSchema.optional(),
  _sum: MedicalCenterSumAggregateInputObjectSchema.optional(),
});
