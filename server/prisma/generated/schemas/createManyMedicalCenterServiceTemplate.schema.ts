import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateManyInputObjectSchema } from './objects/MedicalCenterServiceTemplateCreateManyInput.schema';

export const MedicalCenterServiceTemplateCreateManySchema = z.object({
  data: z.union([
    MedicalCenterServiceTemplateCreateManyInputObjectSchema,
    z.array(MedicalCenterServiceTemplateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
