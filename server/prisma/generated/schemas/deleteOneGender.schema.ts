import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';

export const GenderDeleteOneSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
});
