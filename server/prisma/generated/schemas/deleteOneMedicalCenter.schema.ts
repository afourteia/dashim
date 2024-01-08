import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';

export const MedicalCenterDeleteOneSchema = z.object({
  where: MedicalCenterWhereUniqueInputObjectSchema,
});
