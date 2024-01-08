import { z } from 'zod';
import { RelationshipCreateInputObjectSchema } from './objects/RelationshipCreateInput.schema';
import { RelationshipUncheckedCreateInputObjectSchema } from './objects/RelationshipUncheckedCreateInput.schema';

export const RelationshipCreateOneSchema = z.object({
  data: z.union([
    RelationshipCreateInputObjectSchema,
    RelationshipUncheckedCreateInputObjectSchema,
  ]),
});
