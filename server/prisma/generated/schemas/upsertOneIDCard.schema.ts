import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';
import { IDCardCreateInputObjectSchema } from './objects/IDCardCreateInput.schema';
import { IDCardUncheckedCreateInputObjectSchema } from './objects/IDCardUncheckedCreateInput.schema';
import { IDCardUpdateInputObjectSchema } from './objects/IDCardUpdateInput.schema';
import { IDCardUncheckedUpdateInputObjectSchema } from './objects/IDCardUncheckedUpdateInput.schema';

export const IDCardUpsertSchema = z.object({
  where: IDCardWhereUniqueInputObjectSchema,
  create: z.union([
    IDCardCreateInputObjectSchema,
    IDCardUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    IDCardUpdateInputObjectSchema,
    IDCardUncheckedUpdateInputObjectSchema,
  ]),
});
