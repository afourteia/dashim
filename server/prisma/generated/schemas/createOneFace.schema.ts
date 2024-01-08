import { z } from 'zod';
import { FaceCreateInputObjectSchema } from './objects/FaceCreateInput.schema';
import { FaceUncheckedCreateInputObjectSchema } from './objects/FaceUncheckedCreateInput.schema';

export const FaceCreateOneSchema = z.object({
  data: z.union([
    FaceCreateInputObjectSchema,
    FaceUncheckedCreateInputObjectSchema,
  ]),
});
