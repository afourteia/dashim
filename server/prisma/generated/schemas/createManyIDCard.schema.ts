import { z } from 'zod';
import { IDCardCreateManyInputObjectSchema } from './objects/IDCardCreateManyInput.schema';

export const IDCardCreateManySchema = z.object({
  data: z.union([
    IDCardCreateManyInputObjectSchema,
    z.array(IDCardCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
