import { z } from 'zod';
import { GenderCreateManyInputObjectSchema } from './objects/GenderCreateManyInput.schema';

export const GenderCreateManySchema = z.object({
  data: z.union([
    GenderCreateManyInputObjectSchema,
    z.array(GenderCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
