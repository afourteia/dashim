import { z } from 'zod';
import { IDCardUpdateManyMutationInputObjectSchema } from './objects/IDCardUpdateManyMutationInput.schema';
import { IDCardWhereInputObjectSchema } from './objects/IDCardWhereInput.schema';

export const IDCardUpdateManySchema = z.object({
  data: IDCardUpdateManyMutationInputObjectSchema,
  where: IDCardWhereInputObjectSchema.optional(),
});
