import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';

export const DeviceTokenFindUniqueSchema = z.object({
  where: DeviceTokenWhereUniqueInputObjectSchema,
});
