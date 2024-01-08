import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateCreateInputObjectSchema } from './objects/MedicalCenterServiceTemplateCreateInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUncheckedCreateInput.schema';
import { MedicalCenterServiceTemplateUpdateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUpdateInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterServiceTemplateUncheckedUpdateInput.schema';

export const MedicalCenterServiceTemplateUpsertSchema = z.object({
  where: MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
  create: z.union([
    MedicalCenterServiceTemplateCreateInputObjectSchema,
    MedicalCenterServiceTemplateUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MedicalCenterServiceTemplateUpdateInputObjectSchema,
    MedicalCenterServiceTemplateUncheckedUpdateInputObjectSchema,
  ]),
});
