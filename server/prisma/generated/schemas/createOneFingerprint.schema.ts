import { z } from 'zod';
import { FingerprintCreateInputObjectSchema } from './objects/FingerprintCreateInput.schema';
import { FingerprintUncheckedCreateInputObjectSchema } from './objects/FingerprintUncheckedCreateInput.schema';

export const FingerprintCreateOneSchema = z.object({
  data: z.union([
    FingerprintCreateInputObjectSchema,
    FingerprintUncheckedCreateInputObjectSchema,
  ]),
});
