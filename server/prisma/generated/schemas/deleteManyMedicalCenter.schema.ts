import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './objects/MedicalCenterWhereInput.schema';

export const MedicalCenterDeleteManySchema = z.object({
  where: MedicalCenterWhereInputObjectSchema.optional(),
});
