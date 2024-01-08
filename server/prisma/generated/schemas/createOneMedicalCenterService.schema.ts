import { z } from 'zod';
import { MedicalCenterServiceCreateInputObjectSchema } from './objects/MedicalCenterServiceCreateInput.schema';
import { MedicalCenterServiceUncheckedCreateInputObjectSchema } from './objects/MedicalCenterServiceUncheckedCreateInput.schema';

export const MedicalCenterServiceCreateOneSchema = z.object({
  data: z.union([
    MedicalCenterServiceCreateInputObjectSchema,
    MedicalCenterServiceUncheckedCreateInputObjectSchema,
  ]),
});
