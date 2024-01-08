import { z } from 'zod';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';

export const DeviceTypeDeleteOneSchema = z.object({
  where: DeviceTypeWhereUniqueInputObjectSchema,
});
