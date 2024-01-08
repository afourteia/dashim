import { z } from 'zod';
import { FingerTypeWhereInputObjectSchema } from './objects/FingerTypeWhereInput.schema';

export const FingerTypeDeleteManySchema = z.object({
  where: FingerTypeWhereInputObjectSchema.optional(),
});
