import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';

export const FaceDeleteOneSchema = z.object({
  where: FaceWhereUniqueInputObjectSchema,
});
