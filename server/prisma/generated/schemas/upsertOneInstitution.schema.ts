import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './objects/InstitutionWhereUniqueInput.schema';
import { InstitutionCreateInputObjectSchema } from './objects/InstitutionCreateInput.schema';
import { InstitutionUncheckedCreateInputObjectSchema } from './objects/InstitutionUncheckedCreateInput.schema';
import { InstitutionUpdateInputObjectSchema } from './objects/InstitutionUpdateInput.schema';
import { InstitutionUncheckedUpdateInputObjectSchema } from './objects/InstitutionUncheckedUpdateInput.schema';

export const InstitutionUpsertSchema = z.object({
  where: InstitutionWhereUniqueInputObjectSchema,
  create: z.union([
    InstitutionCreateInputObjectSchema,
    InstitutionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    InstitutionUpdateInputObjectSchema,
    InstitutionUncheckedUpdateInputObjectSchema,
  ]),
});
