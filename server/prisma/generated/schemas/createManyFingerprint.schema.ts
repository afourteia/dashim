import { z } from 'zod';
import { FingerprintCreateManyInputObjectSchema } from './objects/FingerprintCreateManyInput.schema';

export const FingerprintCreateManySchema = z.object({
  data: z.union([
    FingerprintCreateManyInputObjectSchema,
    z.array(FingerprintCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
