import { z } from 'zod';
import { MedicalCenterServiceTemplateOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterServiceTemplateOrderByWithRelationInput.schema';
import { MedicalCenterServiceTemplateWhereInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateScalarFieldEnumSchema } from './enums/MedicalCenterServiceTemplateScalarFieldEnum.schema';

export const MedicalCenterServiceTemplateFindManySchema = z.object({
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
  distinct: z
    .array(MedicalCenterServiceTemplateScalarFieldEnumSchema)
    .optional(),
});
