import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';

export const FingerprintDeleteOneSchema = z.object({
  where: FingerprintWhereUniqueInputObjectSchema,
});
