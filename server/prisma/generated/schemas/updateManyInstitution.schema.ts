import { z } from 'zod';
import { InstitutionUpdateManyMutationInputObjectSchema } from './objects/InstitutionUpdateManyMutationInput.schema';
import { InstitutionWhereInputObjectSchema } from './objects/InstitutionWhereInput.schema';

export const InstitutionUpdateManySchema = z.object({
  data: InstitutionUpdateManyMutationInputObjectSchema,
  where: InstitutionWhereInputObjectSchema.optional(),
});
