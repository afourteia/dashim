import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './objects/IDCardWhereUniqueInput.schema';

export const IDCardFindUniqueSchema = z.object({
  where: IDCardWhereUniqueInputObjectSchema,
});
