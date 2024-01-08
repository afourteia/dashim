import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';

export const FingerprintFindUniqueSchema = z.object({
  where: FingerprintWhereUniqueInputObjectSchema,
});
