import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './objects/MedicalCenterWhereInput.schema';
import { MedicalCenterOrderByWithAggregationInputObjectSchema } from './objects/MedicalCenterOrderByWithAggregationInput.schema';
import { MedicalCenterScalarWhereWithAggregatesInputObjectSchema } from './objects/MedicalCenterScalarWhereWithAggregatesInput.schema';
import { MedicalCenterScalarFieldEnumSchema } from './enums/MedicalCenterScalarFieldEnum.schema';

export const MedicalCenterGroupBySchema = z.object({
  where: MedicalCenterWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MedicalCenterOrderByWithAggregationInputObjectSchema,
      MedicalCenterOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MedicalCenterScalarFieldEnumSchema),
});
