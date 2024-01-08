import { z } from 'zod';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';
import { FingerTypeCreateInputObjectSchema } from './objects/FingerTypeCreateInput.schema';
import { FingerTypeUncheckedCreateInputObjectSchema } from './objects/FingerTypeUncheckedCreateInput.schema';
import { FingerTypeUpdateInputObjectSchema } from './objects/FingerTypeUpdateInput.schema';
import { FingerTypeUncheckedUpdateInputObjectSchema } from './objects/FingerTypeUncheckedUpdateInput.schema';

export const FingerTypeUpsertSchema = z.object({
  where: FingerTypeWhereUniqueInputObjectSchema,
  create: z.union([
    FingerTypeCreateInputObjectSchema,
    FingerTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FingerTypeUpdateInputObjectSchema,
    FingerTypeUncheckedUpdateInputObjectSchema,
  ]),
});
