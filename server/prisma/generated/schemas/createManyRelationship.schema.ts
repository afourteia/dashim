import { z } from 'zod';
import { RelationshipCreateManyInputObjectSchema } from './objects/RelationshipCreateManyInput.schema';

export const RelationshipCreateManySchema = z.object({
  data: z.union([
    RelationshipCreateManyInputObjectSchema,
    z.array(RelationshipCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
