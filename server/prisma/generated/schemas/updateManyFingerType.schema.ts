import { z } from 'zod';
import { FingerTypeUpdateManyMutationInputObjectSchema } from './objects/FingerTypeUpdateManyMutationInput.schema';
import { FingerTypeWhereInputObjectSchema } from './objects/FingerTypeWhereInput.schema';

export const FingerTypeUpdateManySchema = z.object({
  data: FingerTypeUpdateManyMutationInputObjectSchema,
  where: FingerTypeWhereInputObjectSchema.optional(),
});
