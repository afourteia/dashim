import { z } from 'zod';
import { MedicalCenterServiceWhereInputObjectSchema } from './objects/MedicalCenterServiceWhereInput.schema';

export const MedicalCenterServiceDeleteManySchema = z.object({
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
});
