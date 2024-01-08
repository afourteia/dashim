import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';

export const InstitutionDeleteOneSchema = z.object({
  where: InstitutionWhereUniqueInputObjectSchema,
});
