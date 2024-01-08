import { z } from 'zod';
import { FingerTypeCreateManyInputObjectSchema } from './objects/FingerTypeCreateManyInput.schema';

export const FingerTypeCreateManySchema = z.object({
  data: z.union([
    FingerTypeCreateManyInputObjectSchema,
    z.array(FingerTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
