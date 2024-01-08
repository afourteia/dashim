import { z } from 'zod';
import { MedicalCenterServiceWhereInputObjectSchema } from './objects/MedicalCenterServiceWhereInput.schema';
import { MedicalCenterServiceOrderByWithAggregationInputObjectSchema } from './objects/MedicalCenterServiceOrderByWithAggregationInput.schema';
import { MedicalCenterServiceScalarWhereWithAggregatesInputObjectSchema } from './objects/MedicalCenterServiceScalarWhereWithAggregatesInput.schema';
import { MedicalCenterServiceScalarFieldEnumSchema } from './enums/MedicalCenterServiceScalarFieldEnum.schema';

export const MedicalCenterServiceGroupBySchema = z.object({
  where: MedicalCenterServiceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MedicalCenterServiceOrderByWithAggregationInputObjectSchema,
      MedicalCenterServiceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    MedicalCenterServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MedicalCenterServiceScalarFieldEnumSchema),
});
