import { z } from 'zod';
import { MedicalCenterCreateInputObjectSchema } from './objects/MedicalCenterCreateInput.schema';
import { MedicalCenterUncheckedCreateInputObjectSchema } from './objects/MedicalCenterUncheckedCreateInput.schema';

export const MedicalCenterCreateOneSchema = z.object({
  data: z.union([
    MedicalCenterCreateInputObjectSchema,
    MedicalCenterUncheckedCreateInputObjectSchema,
  ]),
});
