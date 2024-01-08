import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';

export const GenderFindUniqueSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
});
