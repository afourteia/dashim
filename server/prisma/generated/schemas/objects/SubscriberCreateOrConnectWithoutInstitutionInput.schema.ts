import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutInstitutionInputObjectSchema } from './SubscriberCreateWithoutInstitutionInput.schema';
import { SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema =
  Schema;
