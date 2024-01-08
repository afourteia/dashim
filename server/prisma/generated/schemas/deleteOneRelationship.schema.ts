import { z } from 'zod';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';

export const RelationshipDeleteOneSchema = z.object({
  where: RelationshipWhereUniqueInputObjectSchema,
});
