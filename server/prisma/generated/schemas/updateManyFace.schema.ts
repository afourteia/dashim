import { z } from 'zod';
import { FaceUpdateManyMutationInputObjectSchema } from './objects/FaceUpdateManyMutationInput.schema';
import { FaceWhereInputObjectSchema } from './objects/FaceWhereInput.schema';

export const FaceUpdateManySchema = z.object({
  data: FaceUpdateManyMutationInputObjectSchema,
  where: FaceWhereInputObjectSchema.optional(),
});
