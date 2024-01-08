import { z } from 'zod';
import { FingerprintWhereInputObjectSchema } from './objects/FingerprintWhereInput.schema';

export const FingerprintDeleteManySchema = z.object({
  where: FingerprintWhereInputObjectSchema.optional(),
});
