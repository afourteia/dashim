import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutInstitutionInputObjectSchema } from './SubscriberUpdateWithoutInstitutionInput.schema';
import { SubscriberUncheckedUpdateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
