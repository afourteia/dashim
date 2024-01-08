import { z } from 'zod';
import { MedicalCenterServiceOrderByWithRelationInputObjectSchema } from './objects/MedicalCenterServiceOrderByWithRelationInput.schema';
import { MedicalCenterServiceWhereInputObjectSchema } from './objects/MedicalCenterServiceWhereInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceScalarFieldEnumSchema } from './enums/MedicalCenterServiceScalarFieldEnum.schema';

export const MedicalCenterServiceFindFirstSchema = z.object({
  orderBy: z
    .union([
      MedicalCenterServiceOrderByWithRelationInputObjectSchema,
      MedicalCenterServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
  cursor: MedicalCenterServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MedicalCenterServiceScalarFieldEnumSchema).optional(),
});
