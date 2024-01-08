import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateInputObjectSchema } from './objects/MedicalCenterCreateInput.schema';
import { MedicalCenterUncheckedCreateInputObjectSchema } from './objects/MedicalCenterUncheckedCreateInput.schema';
import { MedicalCenterUpdateInputObjectSchema } from './objects/MedicalCenterUpdateInput.schema';
import { MedicalCenterUncheckedUpdateInputObjectSchema } from './objects/MedicalCenterUncheckedUpdateInput.schema';

export const MedicalCenterUpsertSchema = z.object({
  where: MedicalCenterWhereUniqueInputObjectSchema,
  create: z.union([
    MedicalCenterCreateInputObjectSchema,
    MedicalCenterUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MedicalCenterUpdateInputObjectSchema,
    MedicalCenterUncheckedUpdateInputObjectSchema,
  ]),
});
