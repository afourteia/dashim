import { z } from 'zod';
import { FaceWhereInputObjectSchema } from './objects/FaceWhereInput.schema';

export const FaceDeleteManySchema = z.object({
  where: FaceWhereInputObjectSchema.optional(),
});
