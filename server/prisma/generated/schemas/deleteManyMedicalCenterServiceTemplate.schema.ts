import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereInput.schema';

export const MedicalCenterServiceTemplateDeleteManySchema = z.object({
  where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
});
