import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './objects/InstitutionWhereInput.schema';
import { InstitutionOrderByWithAggregationInputObjectSchema } from './objects/InstitutionOrderByWithAggregationInput.schema';
import { InstitutionScalarWhereWithAggregatesInputObjectSchema } from './objects/InstitutionScalarWhereWithAggregatesInput.schema';
import { InstitutionScalarFieldEnumSchema } from './enums/InstitutionScalarFieldEnum.schema';

export const InstitutionGroupBySchema = z.object({
  where: InstitutionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InstitutionOrderByWithAggregationInputObjectSchema,
      InstitutionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: InstitutionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InstitutionScalarFieldEnumSchema),
});
