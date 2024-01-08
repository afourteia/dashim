import { z } from 'zod';
import { FaceCreateManyInputObjectSchema } from './objects/FaceCreateManyInput.schema';

export const FaceCreateManySchema = z.object({
  data: z.union([
    FaceCreateManyInputObjectSchema,
    z.array(FaceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
