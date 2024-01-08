import { z } from 'zod';
import { RelationshipUpdateManyMutationInputObjectSchema } from './objects/RelationshipUpdateManyMutationInput.schema';
import { RelationshipWhereInputObjectSchema } from './objects/RelationshipWhereInput.schema';

export const RelationshipUpdateManySchema = z.object({
  data: RelationshipUpdateManyMutationInputObjectSchema,
  where: RelationshipWhereInputObjectSchema.optional(),
});
