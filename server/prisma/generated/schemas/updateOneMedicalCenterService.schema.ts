import { z } from 'zod';
import { MedicalCenterServiceUpdateInputObjectSchema } from './objects/MedicalCenterServiceUpdateInput.schema';
import { MedicalCenterServiceUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterServiceUncheckedUpdateInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';

export const MedicalCenterServiceUpdateOneSchema = z.object({
  data: z.union([
    MedicalCenterServiceUpdateInputObjectSchema,
    MedicalCenterServiceUncheckedUpdateInputObjectSchema,
  ]),
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
});
