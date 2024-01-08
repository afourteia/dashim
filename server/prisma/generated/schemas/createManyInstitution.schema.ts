import { z } from 'zod';
import { InstitutionCreateManyInputObjectSchema } from './objects/InstitutionCreateManyInput.schema';

export const InstitutionCreateManySchema = z.object({
  data: z.union([
    InstitutionCreateManyInputObjectSchema,
    z.array(InstitutionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
