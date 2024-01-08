import { z } from 'zod';
import { InstitutionOrderByWithRelationInputObjectSchema } from './objects/InstitutionOrderByWithRelationInput.schema';
import { InstitutionWhereInputObjectSchema } from './objects/InstitutionWhereInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';
import { InstitutionCountAggregateInputObjectSchema } from './objects/InstitutionCountAggregateInput.schema';
import { InstitutionMinAggregateInputObjectSchema } from './objects/InstitutionMinAggregateInput.schema';
import { InstitutionMaxAggregateInputObjectSchema } from './objects/InstitutionMaxAggregateInput.schema';
import { InstitutionAvgAggregateInputObjectSchema } from './objects/InstitutionAvgAggregateInput.schema';
import { InstitutionSumAggregateInputObjectSchema } from './objects/InstitutionSumAggregateInput.schema';

export const InstitutionAggregateSchema = z.object({
  orderBy: z
    .union([
      InstitutionOrderByWithRelationInputObjectSchema,
      InstitutionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InstitutionWhereInputObjectSchema.optional(),
  cursor: InstitutionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), InstitutionCountAggregateInputObjectSchema])
    .optional(),
  _min: InstitutionMinAggregateInputObjectSchema.optional(),
  _max: InstitutionMaxAggregateInputObjectSchema.optional(),
  _avg: InstitutionAvgAggregateInputObjectSchema.optional(),
  _sum: InstitutionSumAggregateInputObjectSchema.optional(),
});
