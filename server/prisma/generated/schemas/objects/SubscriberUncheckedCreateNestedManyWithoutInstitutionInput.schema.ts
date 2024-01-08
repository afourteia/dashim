import { z } from 'zod';
import { SubscriberCreateWithoutInstitutionInputObjectSchema } from './SubscriberCreateWithoutInstitutionInput.schema';
import { SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedCreateWithoutInstitutionInput.schema';
import { SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema } from './SubscriberCreateOrConnectWithoutInstitutionInput.schema';
import { SubscriberCreateManyInstitutionInputEnvelopeObjectSchema } from './SubscriberCreateManyInstitutionInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUncheckedCreateNestedManyWithoutInstitutionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema),
          z
            .lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberCreateManyInstitutionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema =
  Schema;
