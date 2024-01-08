import { z } from 'zod';
import { GenderWhereUniqueInputObjectSchema } from './objects/GenderWhereUniqueInput.schema';
import { GenderCreateInputObjectSchema } from './objects/GenderCreateInput.schema';
import { GenderUncheckedCreateInputObjectSchema } from './objects/GenderUncheckedCreateInput.schema';
import { GenderUpdateInputObjectSchema } from './objects/GenderUpdateInput.schema';
import { GenderUncheckedUpdateInputObjectSchema } from './objects/GenderUncheckedUpdateInput.schema';

export const GenderUpsertSchema = z.object({
  where: GenderWhereUniqueInputObjectSchema,
  create: z.union([
    GenderCreateInputObjectSchema,
    GenderUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GenderUpdateInputObjectSchema,
    GenderUncheckedUpdateInputObjectSchema,
  ]),
});
