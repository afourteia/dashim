import { z } from 'zod';
import { InstitutionUpdateInputObjectSchema } from './objects/InstitutionUpdateInput.schema';
import { InstitutionUncheckedUpdateInputObjectSchema } from './objects/InstitutionUncheckedUpdateInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';

export const InstitutionUpdateOneSchema = z.object({
  data: z.union([
    InstitutionUpdateInputObjectSchema,
    InstitutionUncheckedUpdateInputObjectSchema,
  ]),
  where: InstitutionWhereUniqueInputObjectSchema,
});
