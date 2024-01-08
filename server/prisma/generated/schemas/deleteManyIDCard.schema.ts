import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './objects/IDCardWhereInput.schema';

export const IDCardDeleteManySchema = z.object({
  where: IDCardWhereInputObjectSchema.optional(),
});
