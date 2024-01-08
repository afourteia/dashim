import { z } from 'zod';
import { FaceWhereUniqueInputObjectSchema } from './objects/FaceWhereUniqueInput.schema';
import { FaceCreateInputObjectSchema } from './objects/FaceCreateInput.schema';
import { FaceUncheckedCreateInputObjectSchema } from './objects/FaceUncheckedCreateInput.schema';
import { FaceUpdateInputObjectSchema } from './objects/FaceUpdateInput.schema';
import { FaceUncheckedUpdateInputObjectSchema } from './objects/FaceUncheckedUpdateInput.schema';

export const FaceUpsertSchema = z.object({
  where: FaceWhereUniqueInputObjectSchema,
  create: z.union([
    FaceCreateInputObjectSchema,
    FaceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FaceUpdateInputObjectSchema,
    FaceUncheckedUpdateInputObjectSchema,
  ]),
});
