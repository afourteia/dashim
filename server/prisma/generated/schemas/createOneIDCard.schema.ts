import { z } from 'zod';
import { IDCardCreateInputObjectSchema } from './objects/IDCardCreateInput.schema';
import { IDCardUncheckedCreateInputObjectSchema } from './objects/IDCardUncheckedCreateInput.schema';

export const IDCardCreateOneSchema = z.object({
  data: z.union([
    IDCardCreateInputObjectSchema,
    IDCardUncheckedCreateInputObjectSchema,
  ]),
});
