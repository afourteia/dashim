import { z } from 'zod';
import { FingerTypeWhereUniqueInputObjectSchema } from './objects/FingerTypeWhereUniqueInput.schema';

export const FingerTypeFindUniqueSchema = z.object({
  where: FingerTypeWhereUniqueInputObjectSchema,
});
