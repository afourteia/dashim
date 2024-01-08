import { z } from 'zod';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';

export const RelationshipFindUniqueSchema = z.object({
  where: RelationshipWhereUniqueInputObjectSchema,
});
