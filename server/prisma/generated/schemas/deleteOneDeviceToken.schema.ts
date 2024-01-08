import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';

export const DeviceTokenDeleteOneSchema = z.object({
  where: DeviceTokenWhereUniqueInputObjectSchema,
});
