import { z } from 'zod';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';

export const DeviceTypeFindUniqueSchema = z.object({
  where: DeviceTypeWhereUniqueInputObjectSchema,
});
