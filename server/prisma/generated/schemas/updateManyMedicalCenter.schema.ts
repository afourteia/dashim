import { z } from 'zod';
import { MedicalCenterUpdateManyMutationInputObjectSchema } from './objects/MedicalCenterUpdateManyMutationInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './objects/MedicalCenterWhereInput.schema';

export const MedicalCenterUpdateManySchema = z.object({
  data: MedicalCenterUpdateManyMutationInputObjectSchema,
  where: MedicalCenterWhereInputObjectSchema.optional(),
});
