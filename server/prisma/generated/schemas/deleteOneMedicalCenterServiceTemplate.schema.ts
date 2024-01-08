import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';

export const MedicalCenterServiceTemplateDeleteOneSchema = z.object({
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
});
