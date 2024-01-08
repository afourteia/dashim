import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';

export const IDCardDeleteOneSchema = z.object({
  where: IDCardWhereUniqueInputObjectSchema,
});
