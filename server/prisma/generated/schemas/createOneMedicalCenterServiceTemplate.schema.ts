import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateInputObjectSchema } from './objects/MedicalCenterServiceTemplateCreateInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUncheckedCreateInput.schema';

export const MedicalCenterServiceTemplateCreateOneSchema = z.object({
  data: z.union([
    MedicalCenterServiceTemplateCreateInputObjectSchema,
    MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
  ]),
});
