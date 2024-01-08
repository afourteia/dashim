import { z } from 'zod';
import { RelationshipWhereUniqueInputObjectSchema } from './objects/RelationshipWhereUniqueInput.schema';
import { RelationshipCreateInputObjectSchema } from './objects/RelationshipCreateInput.schema';
import { RelationshipUncheckedCreateInputObjectSchema } from './objects/RelationshipUncheckedCreateInput.schema';
import { RelationshipUpdateInputObjectSchema } from './objects/RelationshipUpdateInput.schema';
import { RelationshipUncheckedUpdateInputObjectSchema } from './objects/RelationshipUncheckedUpdateInput.schema';

export const RelationshipUpsertSchema = z.object({
  where: RelationshipWhereUniqueInputObjectSchema,
  create: z.union([
    RelationshipCreateInputObjectSchema,
    RelationshipUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RelationshipUpdateInputObjectSchema,
    RelationshipUncheckedUpdateInputObjectSchema,
  ]),
});
