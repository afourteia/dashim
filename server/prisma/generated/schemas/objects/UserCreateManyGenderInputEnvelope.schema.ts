import { z } from 'zod';
import { UserCreateManyGenderInputObjectSchema } from './UserCreateManyGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyGenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateManyGenderInputObjectSchema),
      z.lazy(() => UserCreateManyGenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyGenderInputEnvelopeObjectSchema = Schema;
