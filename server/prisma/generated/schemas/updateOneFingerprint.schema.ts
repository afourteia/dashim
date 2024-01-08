import { z } from 'zod';
import { FingerprintUpdateInputObjectSchema } from './objects/FingerprintUpdateInput.schema';
import { FingerprintUncheckedUpdateInputObjectSchema } from './objects/FingerprintUncheckedUpdateInput.schema';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';

export const FingerprintUpdateOneSchema = z.object({
  data: z.union([
    FingerprintUpdateInputObjectSchema,
    FingerprintUncheckedUpdateInputObjectSchema,
  ]),
  where: FingerprintWhereUniqueInputObjectSchema,
});
