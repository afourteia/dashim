import { z } from 'zod';
import { MedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema } from './objects/MedicalCenterServiceTemplateUpdateManyMutationInput.schema';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereInput.schema';

export const MedicalCenterServiceTemplateUpdateManySchema = z.object({
  data: MedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema,
  where: MedicalCenterServiceTemplateWhereInputObjectSchema.optional(),
});
