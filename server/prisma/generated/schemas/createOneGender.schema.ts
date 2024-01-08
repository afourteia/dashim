import { z } from 'zod';
import { GenderCreateInputObjectSchema } from './objects/GenderCreateInput.schema';
import { GenderUncheckedCreateInputObjectSchema } from './objects/GenderUncheckedCreateInput.schema';

export const GenderCreateOneSchema = z.object({
  data: z.union([
    GenderCreateInputObjectSchema,
    GenderUncheckedCreateInputObjectSchema,
  ]),
});
