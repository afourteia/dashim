import { z } from 'zod';
import { InstitutionCreateInputObjectSchema } from './objects/InstitutionCreateInput.schema';
import { InstitutionUncheckedCreateInputObjectSchema } from './objects/InstitutionUncheckedCreateInput.schema';

export const InstitutionCreateOneSchema = z.object({
  data: z.union([
    InstitutionCreateInputObjectSchema,
    InstitutionUncheckedCreateInputObjectSchema,
  ]),
});
