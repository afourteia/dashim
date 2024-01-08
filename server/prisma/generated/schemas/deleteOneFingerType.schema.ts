import { z } from 'zod';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';

export const FingerTypeDeleteOneSchema = z.object({
  where: FingerTypeWhereUniqueInputObjectSchema,
});
