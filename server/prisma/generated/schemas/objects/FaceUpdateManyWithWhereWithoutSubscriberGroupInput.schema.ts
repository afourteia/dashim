import { z } from 'zod';
import { FaceScalarWhereInputObjectSchema } from './FaceScalarWhereInput.schema';
import { FaceUpdateManyMutationInputObjectSchema } from './FaceUpdateManyMutationInput.schema';
import { FaceUncheckedUpdateManyWithoutFaceInputObjectSchema } from './FaceUncheckedUpdateManyWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUpdateManyWithWhereWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => FaceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FaceUpdateManyMutationInputObjectSchema),
        z.lazy(() => FaceUncheckedUpdateManyWithoutFaceInputObjectSchema),
      ]),
    })
    .strict();

export const FaceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema =
  Schema;
