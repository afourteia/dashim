import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './objects/MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCreateInputObjectSchema } from './objects/MedicalCenterServiceCreateInput.schema';
import { MedicalCenterServiceUncheckedCreateInputObjectSchema } from './objects/MedicalCenterServiceUncheckedCreateInput.schema';
import { MedicalCenterServiceUpdateInputObjectSchema } from './objects/MedicalCenterServiceUpdateInput.schema';
import { MedicalCenterServiceUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterServiceUncheckedUpdateInput.schema';

export const MedicalCenterServiceUpsertSchema = z.object({
  where: MedicalCenterServiceWhereUniqueInputObjectSchema,
  create: z.union([
    MedicalCenterServiceCreateInputObjectSchema,
    MedicalCenterServiceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MedicalCenterServiceUpdateInputObjectSchema,
    MedicalCenterServiceUncheckedUpdateInputObjectSchema,
  ]),
});
