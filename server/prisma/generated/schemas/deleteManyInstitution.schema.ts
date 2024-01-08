import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './objects/InstitutionWhereInput.schema';

export const InstitutionDeleteManySchema = z.object({
  where: InstitutionWhereInputObjectSchema.optional(),
});
