import { z } from 'zod';
import { MedicalCenterServiceUpdateManyMutationInputObjectSchema } from './objects/MedicalCenterServiceUpdateManyMutationInput.schema';
import { MedicalCenterServiceWhereInputObjectSchema } from './objects/MedicalCenterServiceWhereInput.schema';

export const MedicalCenterServiceUpdateManySchema = z.object({
  data: MedicalCenterServiceUpdateManyMutationInputObjectSchema,
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
});
