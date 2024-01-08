import { z } from 'zod';
import { FingerprintWhereUniqueInputObjectSchema } from './objects/FingerprintWhereUniqueInput.schema';
import { FingerprintCreateInputObjectSchema } from './objects/FingerprintCreateInput.schema';
import { FingerprintUncheckedCreateInputObjectSchema } from './objects/FingerprintUncheckedCreateInput.schema';
import { FingerprintUpdateInputObjectSchema } from './objects/FingerprintUpdateInput.schema';
import { FingerprintUncheckedUpdateInputObjectSchema } from './objects/FingerprintUncheckedUpdateInput.schema';

export const FingerprintUpsertSchema = z.object({
  where: FingerprintWhereUniqueInputObjectSchema,
  create: z.union([
    FingerprintCreateInputObjectSchema,
    FingerprintUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FingerprintUpdateInputObjectSchema,
    FingerprintUncheckedUpdateInputObjectSchema,
  ]),
});
