import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './objects/IDCardWhereInput.schema';
import { IDCardOrderByWithAggregationInputObjectSchema } from './objects/IDCardOrderByWithAggregationInput.schema';
import { IDCardScalarWhereWithAggregatesInputObjectSchema } from './objects/IDCardScalarWhereWithAggregatesInput.schema';
import { IDCardScalarFieldEnumSchema } from './enums/IDCardScalarFieldEnum.schema';

export const IDCardGroupBySchema = z.object({
  where: IDCardWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      IDCardOrderByWithAggregationInputObjectSchema,
      IDCardOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: IDCardScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(IDCardScalarFieldEnumSchema),
});
