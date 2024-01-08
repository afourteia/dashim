import { z } from 'zod';
import { MedicalCenterServiceCreateManyInputObjectSchema } from './objects/MedicalCenterServiceCreateManyInput.schema';

export const MedicalCenterServiceCreateManySchema = z.object({
  data: z.union([
    MedicalCenterServiceCreateManyInputObjectSchema,
    z.array(MedicalCenterServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
