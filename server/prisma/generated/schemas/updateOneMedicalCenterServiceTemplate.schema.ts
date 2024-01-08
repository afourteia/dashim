import { z } from 'zod';
import { MedicalCenterServiceTemplateUpdateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUpdateInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUncheckedUpdateInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';

export const MedicalCenterServiceTemplateUpdateOneSchema = z.object({
  data: z.union([
    MedicalCenterServiceTemplateUpdateInputObjectSchema,
    MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema,
  ]),
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});
