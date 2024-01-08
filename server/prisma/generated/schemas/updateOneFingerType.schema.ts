import { z } from 'zod';
import { FingerTypeUpdateInputObjectSchema } from './objects/FingerTypeUpdateInput.schema';
import { FingerTypeUncheckedUpdateInputObjectSchema } from './objects/FingerTypeUncheckedUpdateInput.schema';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';

export const FingerTypeUpdateOneSchema = z.object({
  data: z.union([
    FingerTypeUpdateInputObjectSchema,
    FingerTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: FingerTypeWhereUniqueInputObjectSchema,
});
