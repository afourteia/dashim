import { z } from 'zod';
import { InsurancePolicyCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutInstitutionInput.schema';
import { InsurancePolicyCreateOrConnectWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutInstitutionInput.schema';
import { InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInput.schema';
import { InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema } from './InsurancePolicyCreateManyInstitutionInputEnvelope.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInput.schema';
import { InsurancePolicyUpdateManyWithWhereWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpdateManyWithWhereWithoutInstitutionInput.schema';
import { InsurancePolicyScalarWhereInputObjectSchema } from './InsurancePolicyScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateManyWithoutInstitutionNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
          z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                InsurancePolicyUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InsurancePolicyScalarWhereInputObjectSchema),
          z.lazy(() => InsurancePolicyScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateManyWithoutInstitutionNestedInputObjectSchema =
  Schema;
