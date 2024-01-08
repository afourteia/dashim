import { z } from 'zod';
import { RelationshipUpdateInputObjectSchema } from './objects/RelationshipUpdateInput.schema';
import { RelationshipUncheckedUpdateInputObjectSchema } from './objects/RelationshipUncheckedUpdateInput.schema';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';

export const RelationshipUpdateOneSchema = z.object({
  data: z.union([
    RelationshipUpdateInputObjectSchema,
    RelationshipUncheckedUpdateInputObjectSchema,
  ]),
  where: RelationshipWhereUniqueInputObjectSchema,
});
