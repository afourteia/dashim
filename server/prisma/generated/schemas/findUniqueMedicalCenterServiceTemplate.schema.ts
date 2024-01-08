import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';

export const MedicalCenterServiceTemplateFindUniqueSchema = z.object({
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});
