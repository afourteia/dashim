import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';

export const FaceFindUniqueSchema = z.object({
  where: FaceWhereUniqueInputObjectSchema,
});
