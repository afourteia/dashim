import { z } from 'zod';
import { InsurancePolicyCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutInstitutionInput.schema';
import { InsurancePolicyCreateOrConnectWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutInstitutionInput.schema';
import { InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema } from './InsurancePolicyCreateManyInstitutionInputEnvelope.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateNestedManyWithoutInstitutionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => InsurancePolicyCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () => InsurancePolicyCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyCreateOrConnectWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyCreateOrConnectWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateNestedManyWithoutInstitutionInputObjectSchema =
  Schema;
