import { z } from 'zod';
import { GenderUpdateInputObjectSchema } from './objects/GenderUpdateInput.schema';
import { GenderUncheckedUpdateInputObjectSchema } from './objects/GenderUncheckedUpdateInput.schema';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';

export const GenderUpdateOneSchema = z.object({
  data: z.union([
    GenderUpdateInputObjectSchema,
    GenderUncheckedUpdateInputObjectSchema,
  ]),
  where: GenderWhereUniqueInputObjectSchema,
});
