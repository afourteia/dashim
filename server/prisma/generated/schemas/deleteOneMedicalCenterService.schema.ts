import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';

export const MedicalCenterServiceDeleteOneSchema = z.object({
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
});
