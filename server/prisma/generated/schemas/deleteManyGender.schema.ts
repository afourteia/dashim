import { z } from 'zod';
import { GenderWhereInputObjectSchema } from './objects/GenderWhereInput.schema';

export const GenderDeleteManySchema = z.object({
  where: GenderWhereInputObjectSchema.optional(),
});
