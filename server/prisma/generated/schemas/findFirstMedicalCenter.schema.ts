import { z } from 'zod';
import { MedicalCenterOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterOrderByWithRelationInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './objects/MedicalCenterWhereInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterScalarFieldEnumSchema } from './enums/MedicalCenterScalarFieldEnum.schema';

export const MedicalCenterFindFirstSchema = z.object({
  orderBy: z
    .union([
      MedicalCenterOrderByWithRelationInputObjectSchema,
      MedicalCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterWhereInputObjectSchema.optional(),
  cursor: MedicalCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MedicalCenterScalarFieldEnumSchema).optional(),
});
