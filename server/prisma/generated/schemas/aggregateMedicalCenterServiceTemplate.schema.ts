import { z } from 'zod';
import { MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterServiceTemplateOrderByWithRelationInput.schema';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateCountAggregateInputObjectSchema } from './objects/MedicalCenterServiceTemplateCountAggregateInput.schema';
import { MedicalCenterServiceTemplateMinAggregateInputObjectSchema } from './objects/MedicalCenterServiceTemplateMinAggregateInput.schema';
import { MedicalCenterServiceTemplateMaxAggregateInputObjectSchema } from './objects/MedicalCenterServiceTemplateMaxAggregateInput.schema';

export const MedicalCenterServiceTemplateAggregateSchema = z.object({
  orderBy: z
    .union([
      MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema,
      MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
  cursor: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      MedicalCenterServiceTemplateCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: MedicalCenterServiceTemplateMinAggregateInputObjectSchema.optional(),
  _max: MedicalCenterServiceTemplateMaxAggregateInputObjectSchema.optional(),
});
