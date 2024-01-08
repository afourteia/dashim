import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereInput.schema';
import { MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema } from './objects/MedicalCenterServiceTemplateOrderByWithAggregationInput.schema';
import { MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema } from './objects/MedicalCenterServiceTemplateScalarWhereWithAggregatesInput.schema';
import { MedicalCenterServiceTemplateScalarFieldEnumSchema } from './enums/MedicalCenterServiceTemplateScalarFieldEnum.schema';

export const MedicalCenterServiceTemplateGroupBySchema = z.object({
  where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema,
      MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    MedicalCenterServiceTemplateScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MedicalCenterServiceTemplateScalarFieldEnumSchema),
});
