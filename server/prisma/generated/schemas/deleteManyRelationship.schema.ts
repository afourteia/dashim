import { z } from 'zod';
import { RelationshipWhereInputObjectSchema } from './objects/RelationshipWhereInput.schema';

export const RelationshipDeleteManySchema = z.object({
  where: RelationshipWhereInputObjectSchema.optional(),
});
