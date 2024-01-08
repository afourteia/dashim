import { z } from 'zod';
import { FingerTypeCreateInputObjectSchema } from './objects/FingerTypeCreateInput.schema';
import { FingerTypeUncheckedCreateInputObjectSchema } from './objects/FingerTypeUncheckedCreateInput.schema';

export const FingerTypeCreateOneSchema = z.object({
  data: z.union([
    FingerTypeCreateInputObjectSchema,
    FingerTypeUncheckedCreateInputObjectSchema,
  ]),
});
