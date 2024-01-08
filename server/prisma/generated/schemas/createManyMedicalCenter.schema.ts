import { z } from 'zod';
import { MedicalCenterCreateManyInputObjectSchema } from './objects/MedicalCenterCreateManyInput.schema';

export const MedicalCenterCreateManySchema = z.object({
  data: z.union([
    MedicalCenterCreateManyInputObjectSchema,
    z.array(MedicalCenterCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
