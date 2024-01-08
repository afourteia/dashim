import { z } from 'zod';
import { FingerprintUpdateManyMutationInputObjectSchema } from './objects/FingerprintUpdateManyMutationInput.schema';
import { FingerprintWhereInputObjectSchema } from './objects/FingerprintWhereInput.schema';

export const FingerprintUpdateManySchema = z.object({
  data: FingerprintUpdateManyMutationInputObjectSchema,
  where: FingerprintWhereInputObjectSchema.optional(),
});
