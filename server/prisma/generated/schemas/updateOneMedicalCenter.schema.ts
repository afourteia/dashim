import { z } from 'zod';
import { MedicalCenterUpdateInputObjectSchema } from './objects/MedicalCenterUpdateInput.schema';
import { MedicalCenterUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterUncheckedUpdateInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';

export const MedicalCenterUpdateOneSchema = z.object({
  data: z.union([
    MedicalCenterUpdateInputObjectSchema,
    MedicalCenterUncheckedUpdateInputObjectSchema,
  ]),
  where: MedicalCenterWhereUniqueInputObjectSchema,
});
