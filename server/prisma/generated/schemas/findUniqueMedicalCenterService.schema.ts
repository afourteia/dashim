import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';

export const MedicalCenterServiceFindUniqueSchema = z.object({
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
});
