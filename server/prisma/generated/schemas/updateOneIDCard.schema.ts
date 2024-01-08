import { z } from 'zod';
import { IDCardUpdateInputObjectSchema } from './objects/IDCardUpdateInput.schema';
import { IDCardUncheckedUpdateInputObjectSchema } from './objects/IDCardUncheckedUpdateInput.schema';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';

export const IDCardUpdateOneSchema = z.object({
  data: z.union([
    IDCardUpdateInputObjectSchema,
    IDCardUncheckedUpdateInputObjectSchema,
  ]),
  where: IDCardWhereUniqueInputObjectSchema,
});
