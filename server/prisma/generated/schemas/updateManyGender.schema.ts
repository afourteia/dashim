import { z } from 'zod';
import { GenderUpdateManyMutationInputObjectSchema } from './objects/GenderUpdateManyMutationInput.schema';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';

export const GenderUpdateManySchema = z.object({
  data: GenderUpdateManyMutationInputObjectSchema,
  where: GenderWhereInputObjectSchema.optional(),
});
