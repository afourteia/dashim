import { z } from 'zod';
import { FaceUpdateInputObjectSchema } from './objects/FaceUpdateInput.schema';
import { FaceUncheckedUpdateInputObjectSchema } from './objects/FaceUncheckedUpdateInput.schema';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';

export const FaceUpdateOneSchema = z.object({
  data: z.union([
    FaceUpdateInputObjectSchema,
    FaceUncheckedUpdateInputObjectSchema,
  ]),
  where: FaceWhereUniqueInputObjectSchema,
});
