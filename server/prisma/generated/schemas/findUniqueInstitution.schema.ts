import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';

export const InstitutionFindUniqueSchema = z.object({
  where: InstitutionWhereUniqueInputObjectSchema,
});
